import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFunctionHeaders extends SpeakeasyBase {
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


// CreateFunctionRequestBodyCode
/** 
 * The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
**/
export class CreateFunctionRequestBodyCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @SpeakeasyMetadata({ data: "json, name=S3ObjectVersion" })
  s3ObjectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


// CreateFunctionRequestBodyDeadLetterConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export class CreateFunctionRequestBodyDeadLetterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}


// CreateFunctionRequestBodyEnvironment
/** 
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. 
**/
export class CreateFunctionRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}


// CreateFunctionRequestBodyImageConfig
/** 
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. 
**/
export class CreateFunctionRequestBodyImageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}

export enum CreateFunctionRequestBodyPackageTypeEnum {
    Zip = "Zip",
    Image = "Image"
}

export enum CreateFunctionRequestBodyRuntimeEnum {
    Nodejs = "nodejs",
    Nodejs43 = "nodejs4.3",
    Nodejs610 = "nodejs6.10",
    Nodejs810 = "nodejs8.10",
    Nodejs10X = "nodejs10.x",
    Nodejs12X = "nodejs12.x",
    Nodejs14X = "nodejs14.x",
    Java8 = "java8",
    Java8Al2 = "java8.al2",
    Java11 = "java11",
    Python27 = "python2.7",
    Python36 = "python3.6",
    Python37 = "python3.7",
    Python38 = "python3.8",
    Python39 = "python3.9",
    Dotnetcore10 = "dotnetcore1.0",
    Dotnetcore20 = "dotnetcore2.0",
    Dotnetcore21 = "dotnetcore2.1",
    Dotnetcore31 = "dotnetcore3.1",
    Nodejs43Edge = "nodejs4.3-edge",
    Go1X = "go1.x",
    Ruby25 = "ruby2.5",
    Ruby27 = "ruby2.7",
    Provided = "provided",
    ProvidedAl2 = "provided.al2"
}


// CreateFunctionRequestBodyTracingConfig
/** 
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
export class CreateFunctionRequestBodyTracingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: shared.TracingModeEnum;
}


// CreateFunctionRequestBodyVpcConfig
/** 
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
**/
export class CreateFunctionRequestBodyVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class CreateFunctionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code: CreateFunctionRequestBodyCode;

  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: CreateFunctionRequestBodyDeadLetterConfig;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: CreateFunctionRequestBodyEnvironment;

  @SpeakeasyMetadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig })
  fileSystemConfigs?: shared.FileSystemConfig[];

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "json, name=Handler" })
  handler?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageConfig" })
  imageConfig?: CreateFunctionRequestBodyImageConfig;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Layers" })
  layers?: string[];

  @SpeakeasyMetadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=PackageType" })
  packageType?: CreateFunctionRequestBodyPackageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Publish" })
  publish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=Runtime" })
  runtime?: CreateFunctionRequestBodyRuntimeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=TracingConfig" })
  tracingConfig?: CreateFunctionRequestBodyTracingConfig;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: CreateFunctionRequestBodyVpcConfig;
}


export class CreateFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFunctionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFunctionRequestBody;
}


export class CreateFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codeSigningConfigNotFoundException?: any;

  @SpeakeasyMetadata()
  codeStorageExceededException?: any;

  @SpeakeasyMetadata()
  codeVerificationFailedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  functionConfiguration?: shared.FunctionConfiguration;

  @SpeakeasyMetadata()
  invalidCodeSignatureException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
