var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreateFunctionHeaders = /** @class */ (function (_super) {
    __extends(CreateFunctionHeaders, _super);
    function CreateFunctionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateFunctionHeaders;
}(SpeakeasyBase));
export { CreateFunctionHeaders };
// CreateFunctionRequestBodyCode
/**
 * The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
**/
var CreateFunctionRequestBodyCode = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBodyCode, _super);
    function CreateFunctionRequestBodyCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ImageUri" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyCode.prototype, "imageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Bucket" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyCode.prototype, "s3Bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Key" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyCode.prototype, "s3Key", void 0);
    __decorate([
        Metadata({ data: "json, name=S3ObjectVersion" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyCode.prototype, "s3ObjectVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=ZipFile" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyCode.prototype, "zipFile", void 0);
    return CreateFunctionRequestBodyCode;
}(SpeakeasyBase));
export { CreateFunctionRequestBodyCode };
// CreateFunctionRequestBodyDeadLetterConfig
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
var CreateFunctionRequestBodyDeadLetterConfig = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBodyDeadLetterConfig, _super);
    function CreateFunctionRequestBodyDeadLetterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=TargetArn" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyDeadLetterConfig.prototype, "targetArn", void 0);
    return CreateFunctionRequestBodyDeadLetterConfig;
}(SpeakeasyBase));
export { CreateFunctionRequestBodyDeadLetterConfig };
// CreateFunctionRequestBodyEnvironment
/**
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
**/
var CreateFunctionRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBodyEnvironment, _super);
    function CreateFunctionRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Variables" }),
        __metadata("design:type", Map)
    ], CreateFunctionRequestBodyEnvironment.prototype, "variables", void 0);
    return CreateFunctionRequestBodyEnvironment;
}(SpeakeasyBase));
export { CreateFunctionRequestBodyEnvironment };
// CreateFunctionRequestBodyImageConfig
/**
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>.
**/
var CreateFunctionRequestBodyImageConfig = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBodyImageConfig, _super);
    function CreateFunctionRequestBodyImageConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Command" }),
        __metadata("design:type", Array)
    ], CreateFunctionRequestBodyImageConfig.prototype, "command", void 0);
    __decorate([
        Metadata({ data: "json, name=EntryPoint" }),
        __metadata("design:type", Array)
    ], CreateFunctionRequestBodyImageConfig.prototype, "entryPoint", void 0);
    __decorate([
        Metadata({ data: "json, name=WorkingDirectory" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyImageConfig.prototype, "workingDirectory", void 0);
    return CreateFunctionRequestBodyImageConfig;
}(SpeakeasyBase));
export { CreateFunctionRequestBodyImageConfig };
export var CreateFunctionRequestBodyPackageTypeEnum;
(function (CreateFunctionRequestBodyPackageTypeEnum) {
    CreateFunctionRequestBodyPackageTypeEnum["Zip"] = "Zip";
    CreateFunctionRequestBodyPackageTypeEnum["Image"] = "Image";
})(CreateFunctionRequestBodyPackageTypeEnum || (CreateFunctionRequestBodyPackageTypeEnum = {}));
export var CreateFunctionRequestBodyRuntimeEnum;
(function (CreateFunctionRequestBodyRuntimeEnum) {
    CreateFunctionRequestBodyRuntimeEnum["Nodejs"] = "nodejs";
    CreateFunctionRequestBodyRuntimeEnum["Nodejs43"] = "nodejs4.3";
    CreateFunctionRequestBodyRuntimeEnum["Nodejs610"] = "nodejs6.10";
    CreateFunctionRequestBodyRuntimeEnum["Nodejs810"] = "nodejs8.10";
    CreateFunctionRequestBodyRuntimeEnum["Nodejs10X"] = "nodejs10.x";
    CreateFunctionRequestBodyRuntimeEnum["Nodejs12X"] = "nodejs12.x";
    CreateFunctionRequestBodyRuntimeEnum["Nodejs14X"] = "nodejs14.x";
    CreateFunctionRequestBodyRuntimeEnum["Java8"] = "java8";
    CreateFunctionRequestBodyRuntimeEnum["Java8Al2"] = "java8.al2";
    CreateFunctionRequestBodyRuntimeEnum["Java11"] = "java11";
    CreateFunctionRequestBodyRuntimeEnum["Python27"] = "python2.7";
    CreateFunctionRequestBodyRuntimeEnum["Python36"] = "python3.6";
    CreateFunctionRequestBodyRuntimeEnum["Python37"] = "python3.7";
    CreateFunctionRequestBodyRuntimeEnum["Python38"] = "python3.8";
    CreateFunctionRequestBodyRuntimeEnum["Python39"] = "python3.9";
    CreateFunctionRequestBodyRuntimeEnum["Dotnetcore10"] = "dotnetcore1.0";
    CreateFunctionRequestBodyRuntimeEnum["Dotnetcore20"] = "dotnetcore2.0";
    CreateFunctionRequestBodyRuntimeEnum["Dotnetcore21"] = "dotnetcore2.1";
    CreateFunctionRequestBodyRuntimeEnum["Dotnetcore31"] = "dotnetcore3.1";
    CreateFunctionRequestBodyRuntimeEnum["Nodejs43Edge"] = "nodejs4.3-edge";
    CreateFunctionRequestBodyRuntimeEnum["Go1X"] = "go1.x";
    CreateFunctionRequestBodyRuntimeEnum["Ruby25"] = "ruby2.5";
    CreateFunctionRequestBodyRuntimeEnum["Ruby27"] = "ruby2.7";
    CreateFunctionRequestBodyRuntimeEnum["Provided"] = "provided";
    CreateFunctionRequestBodyRuntimeEnum["ProvidedAl2"] = "provided.al2";
})(CreateFunctionRequestBodyRuntimeEnum || (CreateFunctionRequestBodyRuntimeEnum = {}));
// CreateFunctionRequestBodyTracingConfig
/**
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
var CreateFunctionRequestBodyTracingConfig = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBodyTracingConfig, _super);
    function CreateFunctionRequestBodyTracingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodyTracingConfig.prototype, "mode", void 0);
    return CreateFunctionRequestBodyTracingConfig;
}(SpeakeasyBase));
export { CreateFunctionRequestBodyTracingConfig };
// CreateFunctionRequestBodyVpcConfig
/**
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
**/
var CreateFunctionRequestBodyVpcConfig = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBodyVpcConfig, _super);
    function CreateFunctionRequestBodyVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateFunctionRequestBodyVpcConfig.prototype, "securityGroupIds", void 0);
    __decorate([
        Metadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], CreateFunctionRequestBodyVpcConfig.prototype, "subnetIds", void 0);
    return CreateFunctionRequestBodyVpcConfig;
}(SpeakeasyBase));
export { CreateFunctionRequestBodyVpcConfig };
var CreateFunctionRequestBody = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBody, _super);
    function CreateFunctionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", CreateFunctionRequestBodyCode)
    ], CreateFunctionRequestBody.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=CodeSigningConfigArn" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "codeSigningConfigArn", void 0);
    __decorate([
        Metadata({ data: "json, name=DeadLetterConfig" }),
        __metadata("design:type", CreateFunctionRequestBodyDeadLetterConfig)
    ], CreateFunctionRequestBody.prototype, "deadLetterConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Environment" }),
        __metadata("design:type", CreateFunctionRequestBodyEnvironment)
    ], CreateFunctionRequestBody.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig }),
        __metadata("design:type", Array)
    ], CreateFunctionRequestBody.prototype, "fileSystemConfigs", void 0);
    __decorate([
        Metadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "functionName", void 0);
    __decorate([
        Metadata({ data: "json, name=Handler" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "handler", void 0);
    __decorate([
        Metadata({ data: "json, name=ImageConfig" }),
        __metadata("design:type", CreateFunctionRequestBodyImageConfig)
    ], CreateFunctionRequestBody.prototype, "imageConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=KMSKeyArn" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "kmsKeyArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Layers" }),
        __metadata("design:type", Array)
    ], CreateFunctionRequestBody.prototype, "layers", void 0);
    __decorate([
        Metadata({ data: "json, name=MemorySize" }),
        __metadata("design:type", Number)
    ], CreateFunctionRequestBody.prototype, "memorySize", void 0);
    __decorate([
        Metadata({ data: "json, name=PackageType" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "packageType", void 0);
    __decorate([
        Metadata({ data: "json, name=Publish" }),
        __metadata("design:type", Boolean)
    ], CreateFunctionRequestBody.prototype, "publish", void 0);
    __decorate([
        Metadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "json, name=Runtime" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "runtime", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateFunctionRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], CreateFunctionRequestBody.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=TracingConfig" }),
        __metadata("design:type", CreateFunctionRequestBodyTracingConfig)
    ], CreateFunctionRequestBody.prototype, "tracingConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", CreateFunctionRequestBodyVpcConfig)
    ], CreateFunctionRequestBody.prototype, "vpcConfig", void 0);
    return CreateFunctionRequestBody;
}(SpeakeasyBase));
export { CreateFunctionRequestBody };
var CreateFunctionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionRequest, _super);
    function CreateFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFunctionHeaders)
    ], CreateFunctionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFunctionRequestBody)
    ], CreateFunctionRequest.prototype, "request", void 0);
    return CreateFunctionRequest;
}(SpeakeasyBase));
export { CreateFunctionRequest };
var CreateFunctionResponse = /** @class */ (function (_super) {
    __extends(CreateFunctionResponse, _super);
    function CreateFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "codeSigningConfigNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "codeStorageExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "codeVerificationFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateFunctionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FunctionConfiguration)
    ], CreateFunctionResponse.prototype, "functionConfiguration", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "invalidCodeSignatureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateFunctionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "tooManyRequestsException", void 0);
    return CreateFunctionResponse;
}(SpeakeasyBase));
export { CreateFunctionResponse };
