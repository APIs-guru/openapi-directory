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
var UpdateMacieSessionHeaders = /** @class */ (function (_super) {
    __extends(UpdateMacieSessionHeaders, _super);
    function UpdateMacieSessionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateMacieSessionHeaders;
}(SpeakeasyBase));
export { UpdateMacieSessionHeaders };
export var UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum;
(function (UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum) {
    UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum["FifteenMinutes"] = "FIFTEEN_MINUTES";
    UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum["OneHour"] = "ONE_HOUR";
    UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum["SixHours"] = "SIX_HOURS";
})(UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum || (UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum = {}));
export var UpdateMacieSessionRequestBodyStatusEnum;
(function (UpdateMacieSessionRequestBodyStatusEnum) {
    UpdateMacieSessionRequestBodyStatusEnum["Paused"] = "PAUSED";
    UpdateMacieSessionRequestBodyStatusEnum["Enabled"] = "ENABLED";
})(UpdateMacieSessionRequestBodyStatusEnum || (UpdateMacieSessionRequestBodyStatusEnum = {}));
var UpdateMacieSessionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMacieSessionRequestBody, _super);
    function UpdateMacieSessionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingPublishingFrequency" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionRequestBody.prototype, "findingPublishingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateMacieSessionRequestBody.prototype, "status", void 0);
    return UpdateMacieSessionRequestBody;
}(SpeakeasyBase));
export { UpdateMacieSessionRequestBody };
var UpdateMacieSessionRequest = /** @class */ (function (_super) {
    __extends(UpdateMacieSessionRequest, _super);
    function UpdateMacieSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMacieSessionHeaders)
    ], UpdateMacieSessionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMacieSessionRequestBody)
    ], UpdateMacieSessionRequest.prototype, "request", void 0);
    return UpdateMacieSessionRequest;
}(SpeakeasyBase));
export { UpdateMacieSessionRequest };
var UpdateMacieSessionResponse = /** @class */ (function (_super) {
    __extends(UpdateMacieSessionResponse, _super);
    function UpdateMacieSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMacieSessionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMacieSessionResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMacieSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMacieSessionResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMacieSessionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMacieSessionResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMacieSessionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMacieSessionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateMacieSessionResponse.prototype, "updateMacieSessionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMacieSessionResponse.prototype, "validationException", void 0);
    return UpdateMacieSessionResponse;
}(SpeakeasyBase));
export { UpdateMacieSessionResponse };
