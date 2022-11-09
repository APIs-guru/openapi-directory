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
var UpdateResponsePlanHeaders = /** @class */ (function (_super) {
    __extends(UpdateResponsePlanHeaders, _super);
    function UpdateResponsePlanHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateResponsePlanHeaders;
}(SpeakeasyBase));
export { UpdateResponsePlanHeaders };
// UpdateResponsePlanRequestBodyChatChannel
/**
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
var UpdateResponsePlanRequestBodyChatChannel = /** @class */ (function (_super) {
    __extends(UpdateResponsePlanRequestBodyChatChannel, _super);
    function UpdateResponsePlanRequestBodyChatChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=chatbotSns" }),
        __metadata("design:type", Array)
    ], UpdateResponsePlanRequestBodyChatChannel.prototype, "chatbotSns", void 0);
    __decorate([
        Metadata({ data: "json, name=empty" }),
        __metadata("design:type", Map)
    ], UpdateResponsePlanRequestBodyChatChannel.prototype, "empty", void 0);
    return UpdateResponsePlanRequestBodyChatChannel;
}(SpeakeasyBase));
export { UpdateResponsePlanRequestBodyChatChannel };
var UpdateResponsePlanRequestBody = /** @class */ (function (_super) {
    __extends(UpdateResponsePlanRequestBody, _super);
    function UpdateResponsePlanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=actions", elemType: shared.Action }),
        __metadata("design:type", Array)
    ], UpdateResponsePlanRequestBody.prototype, "actions", void 0);
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanRequestBody.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=chatChannel" }),
        __metadata("design:type", UpdateResponsePlanRequestBodyChatChannel)
    ], UpdateResponsePlanRequestBody.prototype, "chatChannel", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanRequestBody.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=engagements" }),
        __metadata("design:type", Array)
    ], UpdateResponsePlanRequestBody.prototype, "engagements", void 0);
    __decorate([
        Metadata({ data: "json, name=incidentTemplateDedupeString" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanRequestBody.prototype, "incidentTemplateDedupeString", void 0);
    __decorate([
        Metadata({ data: "json, name=incidentTemplateImpact" }),
        __metadata("design:type", Number)
    ], UpdateResponsePlanRequestBody.prototype, "incidentTemplateImpact", void 0);
    __decorate([
        Metadata({ data: "json, name=incidentTemplateNotificationTargets", elemType: shared.NotificationTargetItem }),
        __metadata("design:type", Array)
    ], UpdateResponsePlanRequestBody.prototype, "incidentTemplateNotificationTargets", void 0);
    __decorate([
        Metadata({ data: "json, name=incidentTemplateSummary" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanRequestBody.prototype, "incidentTemplateSummary", void 0);
    __decorate([
        Metadata({ data: "json, name=incidentTemplateTitle" }),
        __metadata("design:type", String)
    ], UpdateResponsePlanRequestBody.prototype, "incidentTemplateTitle", void 0);
    return UpdateResponsePlanRequestBody;
}(SpeakeasyBase));
export { UpdateResponsePlanRequestBody };
var UpdateResponsePlanRequest = /** @class */ (function (_super) {
    __extends(UpdateResponsePlanRequest, _super);
    function UpdateResponsePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateResponsePlanHeaders)
    ], UpdateResponsePlanRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateResponsePlanRequestBody)
    ], UpdateResponsePlanRequest.prototype, "request", void 0);
    return UpdateResponsePlanRequest;
}(SpeakeasyBase));
export { UpdateResponsePlanRequest };
var UpdateResponsePlanResponse = /** @class */ (function (_super) {
    __extends(UpdateResponsePlanResponse, _super);
    function UpdateResponsePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResponsePlanResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResponsePlanResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateResponsePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResponsePlanResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResponsePlanResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateResponsePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResponsePlanResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], UpdateResponsePlanResponse.prototype, "updateResponsePlanOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResponsePlanResponse.prototype, "validationException", void 0);
    return UpdateResponsePlanResponse;
}(SpeakeasyBase));
export { UpdateResponsePlanResponse };
