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
var PutClassificationExportConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationHeaders, _super);
    function PutClassificationExportConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutClassificationExportConfigurationHeaders;
}(SpeakeasyBase));
export { PutClassificationExportConfigurationHeaders };
// PutClassificationExportConfigurationRequestBodyConfiguration
/**
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
**/
var PutClassificationExportConfigurationRequestBodyConfiguration = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationRequestBodyConfiguration, _super);
    function PutClassificationExportConfigurationRequestBodyConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Destination" }),
        __metadata("design:type", shared.S3Destination)
    ], PutClassificationExportConfigurationRequestBodyConfiguration.prototype, "s3Destination", void 0);
    return PutClassificationExportConfigurationRequestBodyConfiguration;
}(SpeakeasyBase));
export { PutClassificationExportConfigurationRequestBodyConfiguration };
var PutClassificationExportConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationRequestBody, _super);
    function PutClassificationExportConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", PutClassificationExportConfigurationRequestBodyConfiguration)
    ], PutClassificationExportConfigurationRequestBody.prototype, "configuration", void 0);
    return PutClassificationExportConfigurationRequestBody;
}(SpeakeasyBase));
export { PutClassificationExportConfigurationRequestBody };
var PutClassificationExportConfigurationRequest = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationRequest, _super);
    function PutClassificationExportConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutClassificationExportConfigurationHeaders)
    ], PutClassificationExportConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutClassificationExportConfigurationRequestBody)
    ], PutClassificationExportConfigurationRequest.prototype, "request", void 0);
    return PutClassificationExportConfigurationRequest;
}(SpeakeasyBase));
export { PutClassificationExportConfigurationRequest };
var PutClassificationExportConfigurationResponse = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationResponse, _super);
    function PutClassificationExportConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutClassificationExportConfigurationResponse)
    ], PutClassificationExportConfigurationResponse.prototype, "putClassificationExportConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutClassificationExportConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "validationException", void 0);
    return PutClassificationExportConfigurationResponse;
}(SpeakeasyBase));
export { PutClassificationExportConfigurationResponse };
