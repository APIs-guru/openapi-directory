import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFunctionConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class UpdateFunctionConfigurationHeaders extends SpeakeasyBase {
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


// UpdateFunctionConfigurationRequestBodyDeadLetterConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export class UpdateFunctionConfigurationRequestBodyDeadLetterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}


// UpdateFunctionConfigurationRequestBodyEnvironment
/** 
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. 
**/
export class UpdateFunctionConfigurationRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}


// UpdateFunctionConfigurationRequestBodyImageConfig
/** 
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. 
**/
export class UpdateFunctionConfigurationRequestBodyImageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Command" })
  command?: string[];

  @Metadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @Metadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}

export enum UpdateFunctionConfigurationRequestBodyRuntimeEnum {
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


// UpdateFunctionConfigurationRequestBodyTracingConfig
/** 
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
export class UpdateFunctionConfigurationRequestBodyTracingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode?: shared.TracingModeEnum;
}


// UpdateFunctionConfigurationRequestBodyVpcConfig
/** 
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
**/
export class UpdateFunctionConfigurationRequestBodyVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}


export class UpdateFunctionConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: UpdateFunctionConfigurationRequestBodyDeadLetterConfig;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: UpdateFunctionConfigurationRequestBodyEnvironment;

  @Metadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig })
  fileSystemConfigs?: shared.FileSystemConfig[];

  @Metadata({ data: "json, name=Handler" })
  handler?: string;

  @Metadata({ data: "json, name=ImageConfig" })
  imageConfig?: UpdateFunctionConfigurationRequestBodyImageConfig;

  @Metadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=Layers" })
  layers?: string[];

  @Metadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Runtime" })
  runtime?: UpdateFunctionConfigurationRequestBodyRuntimeEnum;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=TracingConfig" })
  tracingConfig?: UpdateFunctionConfigurationRequestBodyTracingConfig;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: UpdateFunctionConfigurationRequestBodyVpcConfig;
}


export class UpdateFunctionConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFunctionConfigurationPathParams;

  @Metadata()
  headers: UpdateFunctionConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionConfigurationRequestBody;
}


export class UpdateFunctionConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  codeSigningConfigNotFoundException?: any;

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
  preconditionFailedException?: any;

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
