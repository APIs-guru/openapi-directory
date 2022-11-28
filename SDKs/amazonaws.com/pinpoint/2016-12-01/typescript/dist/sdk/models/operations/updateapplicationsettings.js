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
var UpdateApplicationSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateApplicationSettingsPathParams, _super);
    function UpdateApplicationSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsPathParams.prototype, "applicationId", void 0);
    return UpdateApplicationSettingsPathParams;
}(SpeakeasyBase));
export { UpdateApplicationSettingsPathParams };
var UpdateApplicationSettingsHeaders = /** @class */ (function (_super) {
    __extends(UpdateApplicationSettingsHeaders, _super);
    function UpdateApplicationSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateApplicationSettingsHeaders;
}(SpeakeasyBase));
export { UpdateApplicationSettingsHeaders };
// UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest
/**
 * Specifies the default settings for an application.
**/
var UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest, _super);
    function UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CampaignHook" }),
        __metadata("design:type", shared.CampaignHook)
    ], UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest.prototype, "campaignHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchMetricsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest.prototype, "cloudWatchMetricsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventTaggingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest.prototype, "eventTaggingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limits" }),
        __metadata("design:type", shared.CampaignLimits)
    ], UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuietTime" }),
        __metadata("design:type", shared.QuietTime)
    ], UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest.prototype, "quietTime", void 0);
    return UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest;
}(SpeakeasyBase));
export { UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest };
var UpdateApplicationSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApplicationSettingsRequestBody, _super);
    function UpdateApplicationSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteApplicationSettingsRequest" }),
        __metadata("design:type", UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest)
    ], UpdateApplicationSettingsRequestBody.prototype, "writeApplicationSettingsRequest", void 0);
    return UpdateApplicationSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateApplicationSettingsRequestBody };
var UpdateApplicationSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateApplicationSettingsRequest, _super);
    function UpdateApplicationSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApplicationSettingsPathParams)
    ], UpdateApplicationSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApplicationSettingsHeaders)
    ], UpdateApplicationSettingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateApplicationSettingsRequestBody)
    ], UpdateApplicationSettingsRequest.prototype, "request", void 0);
    return UpdateApplicationSettingsRequest;
}(SpeakeasyBase));
export { UpdateApplicationSettingsRequest };
var UpdateApplicationSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateApplicationSettingsResponse, _super);
    function UpdateApplicationSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationSettingsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApplicationSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationSettingsResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationSettingsResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationSettingsResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationSettingsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationSettingsResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApplicationSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationSettingsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateApplicationSettingsResponse)
    ], UpdateApplicationSettingsResponse.prototype, "updateApplicationSettingsResponse", void 0);
    return UpdateApplicationSettingsResponse;
}(SpeakeasyBase));
export { UpdateApplicationSettingsResponse };
