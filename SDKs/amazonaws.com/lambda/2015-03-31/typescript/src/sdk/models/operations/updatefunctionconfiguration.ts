import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFunctionConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class UpdateFunctionConfigurationHeaders extends SpeakeasyBase {
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


// UpdateFunctionConfigurationRequestBodyDeadLetterConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export class UpdateFunctionConfigurationRequestBodyDeadLetterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}


// UpdateFunctionConfigurationRequestBodyEnvironment
/** 
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. 
**/
export class UpdateFunctionConfigurationRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}


// UpdateFunctionConfigurationRequestBodyImageConfig
/** 
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. 
**/
export class UpdateFunctionConfigurationRequestBodyImageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}

export enum UpdateFunctionConfigurationRequestBodyRuntimeEnum {
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


// UpdateFunctionConfigurationRequestBodyTracingConfig
/** 
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
export class UpdateFunctionConfigurationRequestBodyTracingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: shared.TracingModeEnum;
}


// UpdateFunctionConfigurationRequestBodyVpcConfig
/** 
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
**/
export class UpdateFunctionConfigurationRequestBodyVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class UpdateFunctionConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: UpdateFunctionConfigurationRequestBodyDeadLetterConfig;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: UpdateFunctionConfigurationRequestBodyEnvironment;

  @SpeakeasyMetadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig })
  fileSystemConfigs?: shared.FileSystemConfig[];

  @SpeakeasyMetadata({ data: "json, name=Handler" })
  handler?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageConfig" })
  imageConfig?: UpdateFunctionConfigurationRequestBodyImageConfig;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Layers" })
  layers?: string[];

  @SpeakeasyMetadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Runtime" })
  runtime?: UpdateFunctionConfigurationRequestBodyRuntimeEnum;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=TracingConfig" })
  tracingConfig?: UpdateFunctionConfigurationRequestBodyTracingConfig;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: UpdateFunctionConfigurationRequestBodyVpcConfig;
}


export class UpdateFunctionConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFunctionConfigurationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFunctionConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionConfigurationRequestBody;
}


export class UpdateFunctionConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codeSigningConfigNotFoundException?: any;

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
  preconditionFailedException?: any;

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
