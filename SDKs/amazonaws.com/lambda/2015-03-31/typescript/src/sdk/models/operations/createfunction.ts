import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFunctionHeaders extends SpeakeasyBase {
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


// CreateFunctionRequestBodyCode
/** 
 * The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
**/
export class CreateFunctionRequestBodyCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @Metadata({ data: "json, name=S3ObjectVersion" })
  s3ObjectVersion?: string;

  @Metadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


// CreateFunctionRequestBodyDeadLetterConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export class CreateFunctionRequestBodyDeadLetterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}


// CreateFunctionRequestBodyEnvironment
/** 
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. 
**/
export class CreateFunctionRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}


// CreateFunctionRequestBodyImageConfig
/** 
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. 
**/
export class CreateFunctionRequestBodyImageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Command" })
  command?: string[];

  @Metadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @Metadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}

export enum CreateFunctionRequestBodyPackageTypeEnum {
    Zip = "Zip"
,    Image = "Image"
}

export enum CreateFunctionRequestBodyRuntimeEnum {
    Nodejs = "nodejs"
,    Nodejs43 = "nodejs4.3"
,    Nodejs610 = "nodejs6.10"
,    Nodejs810 = "nodejs8.10"
,    Nodejs10X = "nodejs10.x"
,    Nodejs12X = "nodejs12.x"
,    Nodejs14X = "nodejs14.x"
,    Java8 = "java8"
,    Java8Al2 = "java8.al2"
,    Java11 = "java11"
,    Python27 = "python2.7"
,    Python36 = "python3.6"
,    Python37 = "python3.7"
,    Python38 = "python3.8"
,    Python39 = "python3.9"
,    Dotnetcore10 = "dotnetcore1.0"
,    Dotnetcore20 = "dotnetcore2.0"
,    Dotnetcore21 = "dotnetcore2.1"
,    Dotnetcore31 = "dotnetcore3.1"
,    Nodejs43Edge = "nodejs4.3-edge"
,    Go1X = "go1.x"
,    Ruby25 = "ruby2.5"
,    Ruby27 = "ruby2.7"
,    Provided = "provided"
,    ProvidedAl2 = "provided.al2"
}


// CreateFunctionRequestBodyTracingConfig
/** 
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
export class CreateFunctionRequestBodyTracingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode?: shared.TracingModeEnum;
}


// CreateFunctionRequestBodyVpcConfig
/** 
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
**/
export class CreateFunctionRequestBodyVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class CreateFunctionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code: CreateFunctionRequestBodyCode;

  @Metadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn?: string;

  @Metadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: CreateFunctionRequestBodyDeadLetterConfig;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: CreateFunctionRequestBodyEnvironment;

  @Metadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig })
  fileSystemConfigs?: shared.FileSystemConfig[];

  @Metadata({ data: "json, name=FunctionName" })
  functionName: string;

  @Metadata({ data: "json, name=Handler" })
  handler?: string;

  @Metadata({ data: "json, name=ImageConfig" })
  imageConfig?: CreateFunctionRequestBodyImageConfig;

  @Metadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=Layers" })
  layers?: string[];

  @Metadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @Metadata({ data: "json, name=PackageType" })
  packageType?: CreateFunctionRequestBodyPackageTypeEnum;

  @Metadata({ data: "json, name=Publish" })
  publish?: boolean;

  @Metadata({ data: "json, name=Role" })
  role: string;

  @Metadata({ data: "json, name=Runtime" })
  runtime?: CreateFunctionRequestBodyRuntimeEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=TracingConfig" })
  tracingConfig?: CreateFunctionRequestBodyTracingConfig;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: CreateFunctionRequestBodyVpcConfig;
}


export class CreateFunctionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFunctionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFunctionRequestBody;
}


export class CreateFunctionResponse extends SpeakeasyBase {
  @Metadata()
  codeSigningConfigNotFoundException?: any;

  @Metadata()
  codeStorageExceededException?: any;

  @Metadata()
  codeVerificationFailedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  functionConfiguration?: shared.FunctionConfiguration;

  @Metadata()
  invalidCodeSignatureException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
