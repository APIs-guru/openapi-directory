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
var SendEmailHeaders = /** @class */ (function (_super) {
    __extends(SendEmailHeaders, _super);
    function SendEmailHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SendEmailHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SendEmailHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SendEmailHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SendEmailHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SendEmailHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SendEmailHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SendEmailHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SendEmailHeaders;
}(SpeakeasyBase));
export { SendEmailHeaders };
// SendEmailRequestBodyContent
/**
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
**/
var SendEmailRequestBodyContent = /** @class */ (function (_super) {
    __extends(SendEmailRequestBodyContent, _super);
    function SendEmailRequestBodyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Raw" }),
        __metadata("design:type", shared.RawMessage)
    ], SendEmailRequestBodyContent.prototype, "raw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Simple" }),
        __metadata("design:type", shared.Message)
    ], SendEmailRequestBodyContent.prototype, "simple", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Template" }),
        __metadata("design:type", shared.Template)
    ], SendEmailRequestBodyContent.prototype, "template", void 0);
    return SendEmailRequestBodyContent;
}(SpeakeasyBase));
export { SendEmailRequestBodyContent };
// SendEmailRequestBodyDestination
/**
 * An object that describes the recipients for an email.
**/
var SendEmailRequestBodyDestination = /** @class */ (function (_super) {
    __extends(SendEmailRequestBodyDestination, _super);
    function SendEmailRequestBodyDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BccAddresses" }),
        __metadata("design:type", Array)
    ], SendEmailRequestBodyDestination.prototype, "bccAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CcAddresses" }),
        __metadata("design:type", Array)
    ], SendEmailRequestBodyDestination.prototype, "ccAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ToAddresses" }),
        __metadata("design:type", Array)
    ], SendEmailRequestBodyDestination.prototype, "toAddresses", void 0);
    return SendEmailRequestBodyDestination;
}(SpeakeasyBase));
export { SendEmailRequestBodyDestination };
var SendEmailRequestBody = /** @class */ (function (_super) {
    __extends(SendEmailRequestBody, _super);
    function SendEmailRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], SendEmailRequestBody.prototype, "configurationSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Content" }),
        __metadata("design:type", SendEmailRequestBodyContent)
    ], SendEmailRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destination" }),
        __metadata("design:type", SendEmailRequestBodyDestination)
    ], SendEmailRequestBody.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailTags", elemType: shared.MessageTag }),
        __metadata("design:type", Array)
    ], SendEmailRequestBody.prototype, "emailTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeedbackForwardingEmailAddress" }),
        __metadata("design:type", String)
    ], SendEmailRequestBody.prototype, "feedbackForwardingEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FromEmailAddress" }),
        __metadata("design:type", String)
    ], SendEmailRequestBody.prototype, "fromEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplyToAddresses" }),
        __metadata("design:type", Array)
    ], SendEmailRequestBody.prototype, "replyToAddresses", void 0);
    return SendEmailRequestBody;
}(SpeakeasyBase));
export { SendEmailRequestBody };
var SendEmailRequest = /** @class */ (function (_super) {
    __extends(SendEmailRequest, _super);
    function SendEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendEmailHeaders)
    ], SendEmailRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendEmailRequestBody)
    ], SendEmailRequest.prototype, "request", void 0);
    return SendEmailRequest;
}(SpeakeasyBase));
export { SendEmailRequest };
var SendEmailResponse = /** @class */ (function (_super) {
    __extends(SendEmailResponse, _super);
    function SendEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "accountSuspendedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "mailFromDomainNotVerifiedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "messageRejected", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendEmailResponse)
    ], SendEmailResponse.prototype, "sendEmailResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "sendingPausedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendEmailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SendEmailResponse.prototype, "tooManyRequestsException", void 0);
    return SendEmailResponse;
}(SpeakeasyBase));
export { SendEmailResponse };
