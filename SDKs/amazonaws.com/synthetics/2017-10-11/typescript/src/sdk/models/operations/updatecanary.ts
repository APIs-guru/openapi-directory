import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCanaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateCanaryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateCanaryRequestBodyCode
/** 
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
**/
export class UpdateCanaryRequestBodyCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Handler" })
  handler?: string;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @Metadata({ data: "json, name=S3Version" })
  s3Version?: string;

  @Metadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


// UpdateCanaryRequestBodyRunConfig
/** 
 * A structure that contains input information for a canary run.
**/
export class UpdateCanaryRequestBodyRunConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveTracing" })
  activeTracing?: boolean;

  @Metadata({ data: "json, name=EnvironmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=MemoryInMB" })
  memoryInMb?: number;

  @Metadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}


// UpdateCanaryRequestBodySchedule
/** 
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
export class UpdateCanaryRequestBodySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;

  @Metadata({ data: "json, name=Expression" })
  expression?: string;
}


// UpdateCanaryRequestBodyVisualReference
/** 
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
**/
export class UpdateCanaryRequestBodyVisualReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseCanaryRunId" })
  baseCanaryRunId?: string;

  @Metadata({ data: "json, name=BaseScreenshots", elemType: shared.BaseScreenshot })
  baseScreenshots?: shared.BaseScreenshot[];
}


// UpdateCanaryRequestBodyVpcConfig
/** 
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
export class UpdateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class UpdateCanaryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: UpdateCanaryRequestBodyCode;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=FailureRetentionPeriodInDays" })
  failureRetentionPeriodInDays?: number;

  @Metadata({ data: "json, name=RunConfig" })
  runConfig?: UpdateCanaryRequestBodyRunConfig;

  @Metadata({ data: "json, name=RuntimeVersion" })
  runtimeVersion?: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: UpdateCanaryRequestBodySchedule;

  @Metadata({ data: "json, name=SuccessRetentionPeriodInDays" })
  successRetentionPeriodInDays?: number;

  @Metadata({ data: "json, name=VisualReference" })
  visualReference?: UpdateCanaryRequestBodyVisualReference;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: UpdateCanaryRequestBodyVpcConfig;
}


export class UpdateCanaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCanaryPathParams;

  @Metadata()
  headers: UpdateCanaryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateCanaryRequestBody;
}


export class UpdateCanaryResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCanaryResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
