import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCanaryHeaders extends SpeakeasyBase {
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


// CreateCanaryRequestBodyCode
/** 
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
**/
export class CreateCanaryRequestBodyCode extends SpeakeasyBase {
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


// CreateCanaryRequestBodyRunConfig
/** 
 * A structure that contains input information for a canary run.
**/
export class CreateCanaryRequestBodyRunConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveTracing" })
  activeTracing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MemoryInMB" })
  memoryInMb?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}


// CreateCanaryRequestBodySchedule
/** 
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
export class CreateCanaryRequestBodySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;
}


// CreateCanaryRequestBodyVpcConfig
/** 
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
export class CreateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class CreateCanaryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactS3Location" })
  artifactS3Location: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code: CreateCanaryRequestBodyCode;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=FailureRetentionPeriodInDays" })
  failureRetentionPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RunConfig" })
  runConfig?: CreateCanaryRequestBodyRunConfig;

  @SpeakeasyMetadata({ data: "json, name=RuntimeVersion" })
  runtimeVersion: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule: CreateCanaryRequestBodySchedule;

  @SpeakeasyMetadata({ data: "json, name=SuccessRetentionPeriodInDays" })
  successRetentionPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: CreateCanaryRequestBodyVpcConfig;
}


export class CreateCanaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCanaryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateCanaryRequestBody;
}


export class CreateCanaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCanaryResponse?: shared.CreateCanaryResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
