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
var CreateCampaignPathParams = /** @class */ (function (_super) {
    __extends(CreateCampaignPathParams, _super);
    function CreateCampaignPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], CreateCampaignPathParams.prototype, "applicationId", void 0);
    return CreateCampaignPathParams;
}(SpeakeasyBase));
export { CreateCampaignPathParams };
var CreateCampaignHeaders = /** @class */ (function (_super) {
    __extends(CreateCampaignHeaders, _super);
    function CreateCampaignHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCampaignHeaders;
}(SpeakeasyBase));
export { CreateCampaignHeaders };
// CreateCampaignRequestBodyWriteCampaignRequest
/**
 * Specifies the configuration and other settings for a campaign.
**/
var CreateCampaignRequestBodyWriteCampaignRequest = /** @class */ (function (_super) {
    __extends(CreateCampaignRequestBodyWriteCampaignRequest, _super);
    function CreateCampaignRequestBodyWriteCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalTreatments", elemType: shared.WriteTreatmentResource }),
        __metadata("design:type", Array)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "additionalTreatments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomDeliveryConfiguration" }),
        __metadata("design:type", shared.CustomDeliveryConfiguration)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "customDeliveryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HoldoutPercent" }),
        __metadata("design:type", Number)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "holdoutPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hook" }),
        __metadata("design:type", shared.CampaignHook)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "hook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPaused" }),
        __metadata("design:type", Boolean)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "isPaused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limits" }),
        __metadata("design:type", shared.CampaignLimits)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageConfiguration" }),
        __metadata("design:type", shared.MessageConfiguration)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "messageConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", shared.Schedule)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentId" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "segmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentVersion" }),
        __metadata("design:type", Number)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "segmentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" }),
        __metadata("design:type", shared.TemplateConfiguration)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "templateConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentDescription" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "treatmentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentName" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "treatmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "tags", void 0);
    return CreateCampaignRequestBodyWriteCampaignRequest;
}(SpeakeasyBase));
export { CreateCampaignRequestBodyWriteCampaignRequest };
var CreateCampaignRequestBody = /** @class */ (function (_super) {
    __extends(CreateCampaignRequestBody, _super);
    function CreateCampaignRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteCampaignRequest" }),
        __metadata("design:type", CreateCampaignRequestBodyWriteCampaignRequest)
    ], CreateCampaignRequestBody.prototype, "writeCampaignRequest", void 0);
    return CreateCampaignRequestBody;
}(SpeakeasyBase));
export { CreateCampaignRequestBody };
var CreateCampaignRequest = /** @class */ (function (_super) {
    __extends(CreateCampaignRequest, _super);
    function CreateCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCampaignPathParams)
    ], CreateCampaignRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCampaignHeaders)
    ], CreateCampaignRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCampaignRequestBody)
    ], CreateCampaignRequest.prototype, "request", void 0);
    return CreateCampaignRequest;
}(SpeakeasyBase));
export { CreateCampaignRequest };
var CreateCampaignResponse = /** @class */ (function (_super) {
    __extends(CreateCampaignResponse, _super);
    function CreateCampaignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCampaignResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCampaignResponse)
    ], CreateCampaignResponse.prototype, "createCampaignResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCampaignResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "tooManyRequestsException", void 0);
    return CreateCampaignResponse;
}(SpeakeasyBase));
export { CreateCampaignResponse };
