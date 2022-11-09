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
var SendVoiceMessageHeaders = /** @class */ (function (_super) {
    __extends(SendVoiceMessageHeaders, _super);
    function SendVoiceMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SendVoiceMessageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SendVoiceMessageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SendVoiceMessageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SendVoiceMessageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SendVoiceMessageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SendVoiceMessageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SendVoiceMessageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SendVoiceMessageHeaders;
}(SpeakeasyBase));
export { SendVoiceMessageHeaders };
// SendVoiceMessageRequestBodyContent
/**
 * An object that contains a voice message and information about the recipient that you want to send it to.
**/
var SendVoiceMessageRequestBodyContent = /** @class */ (function (_super) {
    __extends(SendVoiceMessageRequestBodyContent, _super);
    function SendVoiceMessageRequestBodyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CallInstructionsMessage" }),
        __metadata("design:type", shared.CallInstructionsMessageType)
    ], SendVoiceMessageRequestBodyContent.prototype, "callInstructionsMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=PlainTextMessage" }),
        __metadata("design:type", shared.PlainTextMessageType)
    ], SendVoiceMessageRequestBodyContent.prototype, "plainTextMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=SSMLMessage" }),
        __metadata("design:type", shared.SsmlMessageType)
    ], SendVoiceMessageRequestBodyContent.prototype, "ssmlMessage", void 0);
    return SendVoiceMessageRequestBodyContent;
}(SpeakeasyBase));
export { SendVoiceMessageRequestBodyContent };
var SendVoiceMessageRequestBody = /** @class */ (function (_super) {
    __extends(SendVoiceMessageRequestBody, _super);
    function SendVoiceMessageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CallerId" }),
        __metadata("design:type", String)
    ], SendVoiceMessageRequestBody.prototype, "callerId", void 0);
    __decorate([
        Metadata({ data: "json, name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], SendVoiceMessageRequestBody.prototype, "configurationSetName", void 0);
    __decorate([
        Metadata({ data: "json, name=Content" }),
        __metadata("design:type", SendVoiceMessageRequestBodyContent)
    ], SendVoiceMessageRequestBody.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "json, name=DestinationPhoneNumber" }),
        __metadata("design:type", String)
    ], SendVoiceMessageRequestBody.prototype, "destinationPhoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=OriginationPhoneNumber" }),
        __metadata("design:type", String)
    ], SendVoiceMessageRequestBody.prototype, "originationPhoneNumber", void 0);
    return SendVoiceMessageRequestBody;
}(SpeakeasyBase));
export { SendVoiceMessageRequestBody };
var SendVoiceMessageRequest = /** @class */ (function (_super) {
    __extends(SendVoiceMessageRequest, _super);
    function SendVoiceMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SendVoiceMessageHeaders)
    ], SendVoiceMessageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendVoiceMessageRequestBody)
    ], SendVoiceMessageRequest.prototype, "request", void 0);
    return SendVoiceMessageRequest;
}(SpeakeasyBase));
export { SendVoiceMessageRequest };
var SendVoiceMessageResponse = /** @class */ (function (_super) {
    __extends(SendVoiceMessageResponse, _super);
    function SendVoiceMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SendVoiceMessageResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SendVoiceMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SendVoiceMessageResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SendVoiceMessageResponse)
    ], SendVoiceMessageResponse.prototype, "sendVoiceMessageResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SendVoiceMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SendVoiceMessageResponse.prototype, "tooManyRequestsException", void 0);
    return SendVoiceMessageResponse;
}(SpeakeasyBase));
export { SendVoiceMessageResponse };
