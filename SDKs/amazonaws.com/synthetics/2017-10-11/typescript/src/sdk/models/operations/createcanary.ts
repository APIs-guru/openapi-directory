import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCanaryHeaders extends SpeakeasyBase {
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


// CreateCanaryRequestBodyCode
/** 
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
**/
export class CreateCanaryRequestBodyCode extends SpeakeasyBase {
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


// CreateCanaryRequestBodyRunConfig
/** 
 * A structure that contains input information for a canary run.
**/
export class CreateCanaryRequestBodyRunConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveTracing" })
  activeTracing?: boolean;

  @Metadata({ data: "json, name=EnvironmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=MemoryInMB" })
  memoryInMb?: number;

  @Metadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}


// CreateCanaryRequestBodySchedule
/** 
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
export class CreateCanaryRequestBodySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;

  @Metadata({ data: "json, name=Expression" })
  expression?: string;
}


// CreateCanaryRequestBodyVpcConfig
/** 
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
export class CreateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class CreateCanaryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactS3Location" })
  artifactS3Location: string;

  @Metadata({ data: "json, name=Code" })
  code: CreateCanaryRequestBodyCode;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=FailureRetentionPeriodInDays" })
  failureRetentionPeriodInDays?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RunConfig" })
  runConfig?: CreateCanaryRequestBodyRunConfig;

  @Metadata({ data: "json, name=RuntimeVersion" })
  runtimeVersion: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule: CreateCanaryRequestBodySchedule;

  @Metadata({ data: "json, name=SuccessRetentionPeriodInDays" })
  successRetentionPeriodInDays?: number;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: CreateCanaryRequestBodyVpcConfig;
}


export class CreateCanaryRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCanaryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCanaryRequestBody;
}


export class CreateCanaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCanaryResponse?: shared.CreateCanaryResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
