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
var UpdateIncidentRecordHeaders = /** @class */ (function (_super) {
    __extends(UpdateIncidentRecordHeaders, _super);
    function UpdateIncidentRecordHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateIncidentRecordHeaders;
}(SpeakeasyBase));
export { UpdateIncidentRecordHeaders };
// UpdateIncidentRecordRequestBodyChatChannel
/**
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
var UpdateIncidentRecordRequestBodyChatChannel = /** @class */ (function (_super) {
    __extends(UpdateIncidentRecordRequestBodyChatChannel, _super);
    function UpdateIncidentRecordRequestBodyChatChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chatbotSns" }),
        __metadata("design:type", Array)
    ], UpdateIncidentRecordRequestBodyChatChannel.prototype, "chatbotSns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=empty" }),
        __metadata("design:type", Map)
    ], UpdateIncidentRecordRequestBodyChatChannel.prototype, "empty", void 0);
    return UpdateIncidentRecordRequestBodyChatChannel;
}(SpeakeasyBase));
export { UpdateIncidentRecordRequestBodyChatChannel };
export var UpdateIncidentRecordRequestBodyStatusEnum;
(function (UpdateIncidentRecordRequestBodyStatusEnum) {
    UpdateIncidentRecordRequestBodyStatusEnum["Open"] = "OPEN";
    UpdateIncidentRecordRequestBodyStatusEnum["Resolved"] = "RESOLVED";
})(UpdateIncidentRecordRequestBodyStatusEnum || (UpdateIncidentRecordRequestBodyStatusEnum = {}));
var UpdateIncidentRecordRequestBody = /** @class */ (function (_super) {
    __extends(UpdateIncidentRecordRequestBody, _super);
    function UpdateIncidentRecordRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordRequestBody.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chatChannel" }),
        __metadata("design:type", UpdateIncidentRecordRequestBodyChatChannel)
    ], UpdateIncidentRecordRequestBody.prototype, "chatChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impact" }),
        __metadata("design:type", Number)
    ], UpdateIncidentRecordRequestBody.prototype, "impact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationTargets", elemType: shared.NotificationTargetItem }),
        __metadata("design:type", Array)
    ], UpdateIncidentRecordRequestBody.prototype, "notificationTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordRequestBody.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordRequestBody.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UpdateIncidentRecordRequestBody.prototype, "title", void 0);
    return UpdateIncidentRecordRequestBody;
}(SpeakeasyBase));
export { UpdateIncidentRecordRequestBody };
var UpdateIncidentRecordRequest = /** @class */ (function (_super) {
    __extends(UpdateIncidentRecordRequest, _super);
    function UpdateIncidentRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIncidentRecordHeaders)
    ], UpdateIncidentRecordRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateIncidentRecordRequestBody)
    ], UpdateIncidentRecordRequest.prototype, "request", void 0);
    return UpdateIncidentRecordRequest;
}(SpeakeasyBase));
export { UpdateIncidentRecordRequest };
var UpdateIncidentRecordResponse = /** @class */ (function (_super) {
    __extends(UpdateIncidentRecordResponse, _super);
    function UpdateIncidentRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIncidentRecordResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIncidentRecordResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateIncidentRecordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIncidentRecordResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIncidentRecordResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateIncidentRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIncidentRecordResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateIncidentRecordResponse.prototype, "updateIncidentRecordOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIncidentRecordResponse.prototype, "validationException", void 0);
    return UpdateIncidentRecordResponse;
}(SpeakeasyBase));
export { UpdateIncidentRecordResponse };
