import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
**/
export declare class CreateFunctionRequestBodyCode extends SpeakeasyBase {
    imageUri?: string;
    s3Bucket?: string;
    s3Key?: string;
    s3ObjectVersion?: string;
    zipFile?: string;
}
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export declare class CreateFunctionRequestBodyDeadLetterConfig extends SpeakeasyBase {
    targetArn?: string;
}
/**
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
**/
export declare class CreateFunctionRequestBodyEnvironment extends SpeakeasyBase {
    variables?: Map<string, string>;
}
/**
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>.
**/
export declare class CreateFunctionRequestBodyImageConfig extends SpeakeasyBase {
    command?: string[];
    entryPoint?: string[];
    workingDirectory?: string;
}
export declare enum CreateFunctionRequestBodyPackageTypeEnum {
    Zip = "Zip",
    Image = "Image"
}
export declare enum CreateFunctionRequestBodyRuntimeEnum {
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
/**
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
export declare class CreateFunctionRequestBodyTracingConfig extends SpeakeasyBase {
    mode?: shared.TracingModeEnum;
}
/**
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
**/
export declare class CreateFunctionRequestBodyVpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class CreateFunctionRequestBody extends SpeakeasyBase {
    code: CreateFunctionRequestBodyCode;
    codeSigningConfigArn?: string;
    deadLetterConfig?: CreateFunctionRequestBodyDeadLetterConfig;
    description?: string;
    environment?: CreateFunctionRequestBodyEnvironment;
    fileSystemConfigs?: shared.FileSystemConfig[];
    functionName: string;
    handler?: string;
    imageConfig?: CreateFunctionRequestBodyImageConfig;
    kmsKeyArn?: string;
    layers?: string[];
    memorySize?: number;
    packageType?: CreateFunctionRequestBodyPackageTypeEnum;
    publish?: boolean;
    role: string;
    runtime?: CreateFunctionRequestBodyRuntimeEnum;
    tags?: Map<string, string>;
    timeout?: number;
    tracingConfig?: CreateFunctionRequestBodyTracingConfig;
    vpcConfig?: CreateFunctionRequestBodyVpcConfig;
}
export declare class CreateFunctionRequest extends SpeakeasyBase {
    headers: CreateFunctionHeaders;
    request: CreateFunctionRequestBody;
}
export declare class CreateFunctionResponse extends SpeakeasyBase {
    codeSigningConfigNotFoundException?: any;
    codeStorageExceededException?: any;
    codeVerificationFailedException?: any;
    contentType: string;
    functionConfiguration?: shared.FunctionConfiguration;
    invalidCodeSignatureException?: any;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
