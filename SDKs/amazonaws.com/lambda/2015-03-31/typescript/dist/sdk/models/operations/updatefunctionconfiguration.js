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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var UpdateFunctionConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationPathParams, _super);
    function UpdateFunctionConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationPathParams.prototype, "functionName", void 0);
    return UpdateFunctionConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationPathParams };
var UpdateFunctionConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationHeaders, _super);
    function UpdateFunctionConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFunctionConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationHeaders };
// UpdateFunctionConfigurationRequestBodyDeadLetterConfig
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
var UpdateFunctionConfigurationRequestBodyDeadLetterConfig = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequestBodyDeadLetterConfig, _super);
    function UpdateFunctionConfigurationRequestBodyDeadLetterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetArn" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBodyDeadLetterConfig.prototype, "targetArn", void 0);
    return UpdateFunctionConfigurationRequestBodyDeadLetterConfig;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequestBodyDeadLetterConfig };
// UpdateFunctionConfigurationRequestBodyEnvironment
/**
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
**/
var UpdateFunctionConfigurationRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequestBodyEnvironment, _super);
    function UpdateFunctionConfigurationRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Variables" }),
        __metadata("design:type", Map)
    ], UpdateFunctionConfigurationRequestBodyEnvironment.prototype, "variables", void 0);
    return UpdateFunctionConfigurationRequestBodyEnvironment;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequestBodyEnvironment };
// UpdateFunctionConfigurationRequestBodyImageConfig
/**
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>.
**/
var UpdateFunctionConfigurationRequestBodyImageConfig = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequestBodyImageConfig, _super);
    function UpdateFunctionConfigurationRequestBodyImageConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Command" }),
        __metadata("design:type", Array)
    ], UpdateFunctionConfigurationRequestBodyImageConfig.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntryPoint" }),
        __metadata("design:type", Array)
    ], UpdateFunctionConfigurationRequestBodyImageConfig.prototype, "entryPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkingDirectory" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBodyImageConfig.prototype, "workingDirectory", void 0);
    return UpdateFunctionConfigurationRequestBodyImageConfig;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequestBodyImageConfig };
export var UpdateFunctionConfigurationRequestBodyRuntimeEnum;
(function (UpdateFunctionConfigurationRequestBodyRuntimeEnum) {
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs"] = "nodejs";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs43"] = "nodejs4.3";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs610"] = "nodejs6.10";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs810"] = "nodejs8.10";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs10X"] = "nodejs10.x";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs12X"] = "nodejs12.x";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs14X"] = "nodejs14.x";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Java8"] = "java8";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Java8Al2"] = "java8.al2";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Java11"] = "java11";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Python27"] = "python2.7";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Python36"] = "python3.6";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Python37"] = "python3.7";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Python38"] = "python3.8";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Python39"] = "python3.9";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Dotnetcore10"] = "dotnetcore1.0";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Dotnetcore20"] = "dotnetcore2.0";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Dotnetcore21"] = "dotnetcore2.1";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Dotnetcore31"] = "dotnetcore3.1";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Nodejs43Edge"] = "nodejs4.3-edge";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Go1X"] = "go1.x";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Ruby25"] = "ruby2.5";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Ruby27"] = "ruby2.7";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["Provided"] = "provided";
    UpdateFunctionConfigurationRequestBodyRuntimeEnum["ProvidedAl2"] = "provided.al2";
})(UpdateFunctionConfigurationRequestBodyRuntimeEnum || (UpdateFunctionConfigurationRequestBodyRuntimeEnum = {}));
// UpdateFunctionConfigurationRequestBodyTracingConfig
/**
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
var UpdateFunctionConfigurationRequestBodyTracingConfig = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequestBodyTracingConfig, _super);
    function UpdateFunctionConfigurationRequestBodyTracingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBodyTracingConfig.prototype, "mode", void 0);
    return UpdateFunctionConfigurationRequestBodyTracingConfig;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequestBodyTracingConfig };
// UpdateFunctionConfigurationRequestBodyVpcConfig
/**
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
**/
var UpdateFunctionConfigurationRequestBodyVpcConfig = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequestBodyVpcConfig, _super);
    function UpdateFunctionConfigurationRequestBodyVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateFunctionConfigurationRequestBodyVpcConfig.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], UpdateFunctionConfigurationRequestBodyVpcConfig.prototype, "subnetIds", void 0);
    return UpdateFunctionConfigurationRequestBodyVpcConfig;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequestBodyVpcConfig };
var UpdateFunctionConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequestBody, _super);
    function UpdateFunctionConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" }),
        __metadata("design:type", UpdateFunctionConfigurationRequestBodyDeadLetterConfig)
    ], UpdateFunctionConfigurationRequestBody.prototype, "deadLetterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", UpdateFunctionConfigurationRequestBodyEnvironment)
    ], UpdateFunctionConfigurationRequestBody.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig }),
        __metadata("design:type", Array)
    ], UpdateFunctionConfigurationRequestBody.prototype, "fileSystemConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Handler" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBody.prototype, "handler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageConfig" }),
        __metadata("design:type", UpdateFunctionConfigurationRequestBodyImageConfig)
    ], UpdateFunctionConfigurationRequestBody.prototype, "imageConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KMSKeyArn" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBody.prototype, "kmsKeyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Layers" }),
        __metadata("design:type", Array)
    ], UpdateFunctionConfigurationRequestBody.prototype, "layers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemorySize" }),
        __metadata("design:type", Number)
    ], UpdateFunctionConfigurationRequestBody.prototype, "memorySize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RevisionId" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBody.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Runtime" }),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationRequestBody.prototype, "runtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], UpdateFunctionConfigurationRequestBody.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TracingConfig" }),
        __metadata("design:type", UpdateFunctionConfigurationRequestBodyTracingConfig)
    ], UpdateFunctionConfigurationRequestBody.prototype, "tracingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", UpdateFunctionConfigurationRequestBodyVpcConfig)
    ], UpdateFunctionConfigurationRequestBody.prototype, "vpcConfig", void 0);
    return UpdateFunctionConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequestBody };
var UpdateFunctionConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationRequest, _super);
    function UpdateFunctionConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionConfigurationPathParams)
    ], UpdateFunctionConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionConfigurationHeaders)
    ], UpdateFunctionConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFunctionConfigurationRequestBody)
    ], UpdateFunctionConfigurationRequest.prototype, "request", void 0);
    return UpdateFunctionConfigurationRequest;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationRequest };
var UpdateFunctionConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionConfigurationResponse, _super);
    function UpdateFunctionConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "codeSigningConfigNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "codeVerificationFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFunctionConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FunctionConfiguration)
    ], UpdateFunctionConfigurationResponse.prototype, "functionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "invalidCodeSignatureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFunctionConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionConfigurationResponse.prototype, "tooManyRequestsException", void 0);
    return UpdateFunctionConfigurationResponse;
}(SpeakeasyBase));
export { UpdateFunctionConfigurationResponse };
