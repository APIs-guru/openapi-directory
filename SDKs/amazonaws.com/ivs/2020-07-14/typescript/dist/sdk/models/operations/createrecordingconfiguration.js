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
var CreateRecordingConfigurationHeaders = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationHeaders, _super);
    function CreateRecordingConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRecordingConfigurationHeaders;
}(SpeakeasyBase));
export { CreateRecordingConfigurationHeaders };
// CreateRecordingConfigurationRequestBodyDestinationConfiguration
/**
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
var CreateRecordingConfigurationRequestBodyDestinationConfiguration = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationRequestBodyDestinationConfiguration, _super);
    function CreateRecordingConfigurationRequestBodyDestinationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3" }),
        __metadata("design:type", shared.S3DestinationConfiguration)
    ], CreateRecordingConfigurationRequestBodyDestinationConfiguration.prototype, "s3", void 0);
    return CreateRecordingConfigurationRequestBodyDestinationConfiguration;
}(SpeakeasyBase));
export { CreateRecordingConfigurationRequestBodyDestinationConfiguration };
var CreateRecordingConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationRequestBody, _super);
    function CreateRecordingConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfiguration" }),
        __metadata("design:type", CreateRecordingConfigurationRequestBodyDestinationConfiguration)
    ], CreateRecordingConfigurationRequestBody.prototype, "destinationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateRecordingConfigurationRequestBody.prototype, "tags", void 0);
    return CreateRecordingConfigurationRequestBody;
}(SpeakeasyBase));
export { CreateRecordingConfigurationRequestBody };
var CreateRecordingConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationRequest, _super);
    function CreateRecordingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRecordingConfigurationHeaders)
    ], CreateRecordingConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRecordingConfigurationRequestBody)
    ], CreateRecordingConfigurationRequest.prototype, "request", void 0);
    return CreateRecordingConfigurationRequest;
}(SpeakeasyBase));
export { CreateRecordingConfigurationRequest };
var CreateRecordingConfigurationResponse = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationResponse, _super);
    function CreateRecordingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateRecordingConfigurationResponse)
    ], CreateRecordingConfigurationResponse.prototype, "createRecordingConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "pendingVerification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRecordingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "validationException", void 0);
    return CreateRecordingConfigurationResponse;
}(SpeakeasyBase));
export { CreateRecordingConfigurationResponse };
