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
var CreateDeploymentJobHeaders = /** @class */ (function (_super) {
    __extends(CreateDeploymentJobHeaders, _super);
    function CreateDeploymentJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDeploymentJobHeaders;
}(SpeakeasyBase));
export { CreateDeploymentJobHeaders };
// CreateDeploymentJobRequestBodyDeploymentConfig
/**
 * Information about a deployment configuration.
**/
var CreateDeploymentJobRequestBodyDeploymentConfig = /** @class */ (function (_super) {
    __extends(CreateDeploymentJobRequestBodyDeploymentConfig, _super);
    function CreateDeploymentJobRequestBodyDeploymentConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=concurrentDeploymentPercentage" }),
        __metadata("design:type", Number)
    ], CreateDeploymentJobRequestBodyDeploymentConfig.prototype, "concurrentDeploymentPercentage", void 0);
    __decorate([
        Metadata({ data: "json, name=downloadConditionFile" }),
        __metadata("design:type", shared.S3Object)
    ], CreateDeploymentJobRequestBodyDeploymentConfig.prototype, "downloadConditionFile", void 0);
    __decorate([
        Metadata({ data: "json, name=failureThresholdPercentage" }),
        __metadata("design:type", Number)
    ], CreateDeploymentJobRequestBodyDeploymentConfig.prototype, "failureThresholdPercentage", void 0);
    __decorate([
        Metadata({ data: "json, name=robotDeploymentTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], CreateDeploymentJobRequestBodyDeploymentConfig.prototype, "robotDeploymentTimeoutInSeconds", void 0);
    return CreateDeploymentJobRequestBodyDeploymentConfig;
}(SpeakeasyBase));
export { CreateDeploymentJobRequestBodyDeploymentConfig };
var CreateDeploymentJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateDeploymentJobRequestBody, _super);
    function CreateDeploymentJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=deploymentApplicationConfigs", elemType: shared.DeploymentApplicationConfig }),
        __metadata("design:type", Array)
    ], CreateDeploymentJobRequestBody.prototype, "deploymentApplicationConfigs", void 0);
    __decorate([
        Metadata({ data: "json, name=deploymentConfig" }),
        __metadata("design:type", CreateDeploymentJobRequestBodyDeploymentConfig)
    ], CreateDeploymentJobRequestBody.prototype, "deploymentConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=fleet" }),
        __metadata("design:type", String)
    ], CreateDeploymentJobRequestBody.prototype, "fleet", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateDeploymentJobRequestBody.prototype, "tags", void 0);
    return CreateDeploymentJobRequestBody;
}(SpeakeasyBase));
export { CreateDeploymentJobRequestBody };
var CreateDeploymentJobRequest = /** @class */ (function (_super) {
    __extends(CreateDeploymentJobRequest, _super);
    function CreateDeploymentJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDeploymentJobHeaders)
    ], CreateDeploymentJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDeploymentJobRequestBody)
    ], CreateDeploymentJobRequest.prototype, "request", void 0);
    return CreateDeploymentJobRequest;
}(SpeakeasyBase));
export { CreateDeploymentJobRequest };
var CreateDeploymentJobResponse = /** @class */ (function (_super) {
    __extends(CreateDeploymentJobResponse, _super);
    function CreateDeploymentJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentJobResponse.prototype, "concurrentDeploymentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDeploymentJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateDeploymentJobResponse)
    ], CreateDeploymentJobResponse.prototype, "createDeploymentJobResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentJobResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentJobResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDeploymentJobResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDeploymentJobResponse.prototype, "throttlingException", void 0);
    return CreateDeploymentJobResponse;
}(SpeakeasyBase));
export { CreateDeploymentJobResponse };
