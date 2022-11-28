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
var PutRawMessageContentPathParams = /** @class */ (function (_super) {
    __extends(PutRawMessageContentPathParams, _super);
    function PutRawMessageContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" }),
        __metadata("design:type", String)
    ], PutRawMessageContentPathParams.prototype, "messageId", void 0);
    return PutRawMessageContentPathParams;
}(SpeakeasyBase));
export { PutRawMessageContentPathParams };
var PutRawMessageContentHeaders = /** @class */ (function (_super) {
    __extends(PutRawMessageContentHeaders, _super);
    function PutRawMessageContentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutRawMessageContentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutRawMessageContentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutRawMessageContentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutRawMessageContentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutRawMessageContentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutRawMessageContentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutRawMessageContentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutRawMessageContentHeaders;
}(SpeakeasyBase));
export { PutRawMessageContentHeaders };
// PutRawMessageContentRequestBodyContent
/**
 * <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>
**/
var PutRawMessageContentRequestBodyContent = /** @class */ (function (_super) {
    __extends(PutRawMessageContentRequestBodyContent, _super);
    function PutRawMessageContentRequestBodyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Reference" }),
        __metadata("design:type", shared.S3Reference)
    ], PutRawMessageContentRequestBodyContent.prototype, "s3Reference", void 0);
    return PutRawMessageContentRequestBodyContent;
}(SpeakeasyBase));
export { PutRawMessageContentRequestBodyContent };
var PutRawMessageContentRequestBody = /** @class */ (function (_super) {
    __extends(PutRawMessageContentRequestBody, _super);
    function PutRawMessageContentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", PutRawMessageContentRequestBodyContent)
    ], PutRawMessageContentRequestBody.prototype, "content", void 0);
    return PutRawMessageContentRequestBody;
}(SpeakeasyBase));
export { PutRawMessageContentRequestBody };
var PutRawMessageContentRequest = /** @class */ (function (_super) {
    __extends(PutRawMessageContentRequest, _super);
    function PutRawMessageContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRawMessageContentPathParams)
    ], PutRawMessageContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRawMessageContentHeaders)
    ], PutRawMessageContentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutRawMessageContentRequestBody)
    ], PutRawMessageContentRequest.prototype, "request", void 0);
    return PutRawMessageContentRequest;
}(SpeakeasyBase));
export { PutRawMessageContentRequest };
var PutRawMessageContentResponse = /** @class */ (function (_super) {
    __extends(PutRawMessageContentResponse, _super);
    function PutRawMessageContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRawMessageContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutRawMessageContentResponse.prototype, "invalidContentLocation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutRawMessageContentResponse.prototype, "messageFrozen", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutRawMessageContentResponse.prototype, "messageRejected", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutRawMessageContentResponse.prototype, "putRawMessageContentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutRawMessageContentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRawMessageContentResponse.prototype, "statusCode", void 0);
    return PutRawMessageContentResponse;
}(SpeakeasyBase));
export { PutRawMessageContentResponse };
