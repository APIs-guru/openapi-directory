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
var UpdateCampaignPathParams = /** @class */ (function (_super) {
    __extends(UpdateCampaignPathParams, _super);
    function UpdateCampaignPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateCampaignPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign-id" }),
        __metadata("design:type", String)
    ], UpdateCampaignPathParams.prototype, "campaignId", void 0);
    return UpdateCampaignPathParams;
}(SpeakeasyBase));
export { UpdateCampaignPathParams };
var UpdateCampaignHeaders = /** @class */ (function (_super) {
    __extends(UpdateCampaignHeaders, _super);
    function UpdateCampaignHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateCampaignHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateCampaignHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateCampaignHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateCampaignHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateCampaignHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateCampaignHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateCampaignHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateCampaignHeaders;
}(SpeakeasyBase));
export { UpdateCampaignHeaders };
// UpdateCampaignRequestBodyWriteCampaignRequest
/**
 * Specifies the configuration and other settings for a campaign.
**/
var UpdateCampaignRequestBodyWriteCampaignRequest = /** @class */ (function (_super) {
    __extends(UpdateCampaignRequestBodyWriteCampaignRequest, _super);
    function UpdateCampaignRequestBodyWriteCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalTreatments", elemType: shared.WriteTreatmentResource }),
        __metadata("design:type", Array)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "additionalTreatments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomDeliveryConfiguration" }),
        __metadata("design:type", shared.CustomDeliveryConfiguration)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "customDeliveryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HoldoutPercent" }),
        __metadata("design:type", Number)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "holdoutPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hook" }),
        __metadata("design:type", shared.CampaignHook)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "hook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPaused" }),
        __metadata("design:type", Boolean)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "isPaused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limits" }),
        __metadata("design:type", shared.CampaignLimits)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageConfiguration" }),
        __metadata("design:type", shared.MessageConfiguration)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "messageConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", shared.Schedule)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentId" }),
        __metadata("design:type", String)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "segmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentVersion" }),
        __metadata("design:type", Number)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "segmentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" }),
        __metadata("design:type", shared.TemplateConfiguration)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "templateConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentDescription" }),
        __metadata("design:type", String)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "treatmentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentName" }),
        __metadata("design:type", String)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "treatmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], UpdateCampaignRequestBodyWriteCampaignRequest.prototype, "tags", void 0);
    return UpdateCampaignRequestBodyWriteCampaignRequest;
}(SpeakeasyBase));
export { UpdateCampaignRequestBodyWriteCampaignRequest };
var UpdateCampaignRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCampaignRequestBody, _super);
    function UpdateCampaignRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteCampaignRequest" }),
        __metadata("design:type", UpdateCampaignRequestBodyWriteCampaignRequest)
    ], UpdateCampaignRequestBody.prototype, "writeCampaignRequest", void 0);
    return UpdateCampaignRequestBody;
}(SpeakeasyBase));
export { UpdateCampaignRequestBody };
var UpdateCampaignRequest = /** @class */ (function (_super) {
    __extends(UpdateCampaignRequest, _super);
    function UpdateCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCampaignPathParams)
    ], UpdateCampaignRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCampaignHeaders)
    ], UpdateCampaignRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCampaignRequestBody)
    ], UpdateCampaignRequest.prototype, "request", void 0);
    return UpdateCampaignRequest;
}(SpeakeasyBase));
export { UpdateCampaignRequest };
var UpdateCampaignResponse = /** @class */ (function (_super) {
    __extends(UpdateCampaignResponse, _super);
    function UpdateCampaignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCampaignResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCampaignResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCampaignResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCampaignResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCampaignResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCampaignResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCampaignResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCampaignResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCampaignResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateCampaignResponse)
    ], UpdateCampaignResponse.prototype, "updateCampaignResponse", void 0);
    return UpdateCampaignResponse;
}(SpeakeasyBase));
export { UpdateCampaignResponse };
