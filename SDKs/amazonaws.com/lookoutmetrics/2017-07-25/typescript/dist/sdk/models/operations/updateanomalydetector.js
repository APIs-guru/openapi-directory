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
var UpdateAnomalyDetectorHeaders = /** @class */ (function (_super) {
    __extends(UpdateAnomalyDetectorHeaders, _super);
    function UpdateAnomalyDetectorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAnomalyDetectorHeaders;
}(SpeakeasyBase));
export { UpdateAnomalyDetectorHeaders };
// UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig
/**
 * Contains information about a detector's configuration.
**/
var UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig = /** @class */ (function (_super) {
    __extends(UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig, _super);
    function UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorFrequency" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig.prototype, "anomalyDetectorFrequency", void 0);
    return UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
}(SpeakeasyBase));
export { UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig };
var UpdateAnomalyDetectorRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAnomalyDetectorRequestBody, _super);
    function UpdateAnomalyDetectorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorConfig" }),
        __metadata("design:type", UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig)
    ], UpdateAnomalyDetectorRequestBody.prototype, "anomalyDetectorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorDescription" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorRequestBody.prototype, "anomalyDetectorDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyArn" }),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorRequestBody.prototype, "kmsKeyArn", void 0);
    return UpdateAnomalyDetectorRequestBody;
}(SpeakeasyBase));
export { UpdateAnomalyDetectorRequestBody };
var UpdateAnomalyDetectorRequest = /** @class */ (function (_super) {
    __extends(UpdateAnomalyDetectorRequest, _super);
    function UpdateAnomalyDetectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAnomalyDetectorHeaders)
    ], UpdateAnomalyDetectorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAnomalyDetectorRequestBody)
    ], UpdateAnomalyDetectorRequest.prototype, "request", void 0);
    return UpdateAnomalyDetectorRequest;
}(SpeakeasyBase));
export { UpdateAnomalyDetectorRequest };
var UpdateAnomalyDetectorResponse = /** @class */ (function (_super) {
    __extends(UpdateAnomalyDetectorResponse, _super);
    function UpdateAnomalyDetectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAnomalyDetectorResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAnomalyDetectorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAnomalyDetectorResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAnomalyDetectorResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAnomalyDetectorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAnomalyDetectorResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateAnomalyDetectorResponse)
    ], UpdateAnomalyDetectorResponse.prototype, "updateAnomalyDetectorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAnomalyDetectorResponse.prototype, "validationException", void 0);
    return UpdateAnomalyDetectorResponse;
}(SpeakeasyBase));
export { UpdateAnomalyDetectorResponse };
