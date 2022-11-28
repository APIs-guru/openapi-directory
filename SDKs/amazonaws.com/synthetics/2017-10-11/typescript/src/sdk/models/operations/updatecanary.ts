import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCanaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateCanaryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateCanaryRequestBodyCode
/** 
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
**/
export class UpdateCanaryRequestBodyCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handler" })
  handler?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Version" })
  s3Version?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


// UpdateCanaryRequestBodyRunConfig
/** 
 * A structure that contains input information for a canary run.
**/
export class UpdateCanaryRequestBodyRunConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveTracing" })
  activeTracing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MemoryInMB" })
  memoryInMb?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}


// UpdateCanaryRequestBodySchedule
/** 
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
export class UpdateCanaryRequestBodySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;
}


// UpdateCanaryRequestBodyVisualReference
/** 
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
**/
export class UpdateCanaryRequestBodyVisualReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseCanaryRunId" })
  baseCanaryRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=BaseScreenshots", elemType: shared.BaseScreenshot })
  baseScreenshots?: shared.BaseScreenshot[];
}


// UpdateCanaryRequestBodyVpcConfig
/** 
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
export class UpdateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class UpdateCanaryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: UpdateCanaryRequestBodyCode;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureRetentionPeriodInDays" })
  failureRetentionPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=RunConfig" })
  runConfig?: UpdateCanaryRequestBodyRunConfig;

  @SpeakeasyMetadata({ data: "json, name=RuntimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: UpdateCanaryRequestBodySchedule;

  @SpeakeasyMetadata({ data: "json, name=SuccessRetentionPeriodInDays" })
  successRetentionPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=VisualReference" })
  visualReference?: UpdateCanaryRequestBodyVisualReference;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: UpdateCanaryRequestBodyVpcConfig;
}


export class UpdateCanaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCanaryPathParams;

  @SpeakeasyMetadata()
  headers: UpdateCanaryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateCanaryRequestBody;
}


export class UpdateCanaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCanaryResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
