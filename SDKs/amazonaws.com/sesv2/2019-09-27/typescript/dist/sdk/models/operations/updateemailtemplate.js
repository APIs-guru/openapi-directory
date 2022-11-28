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
var UpdateEmailTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplatePathParams, _super);
    function UpdateEmailTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplatePathParams.prototype, "templateName", void 0);
    return UpdateEmailTemplatePathParams;
}(SpeakeasyBase));
export { UpdateEmailTemplatePathParams };
var UpdateEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateHeaders, _super);
    function UpdateEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEmailTemplateHeaders;
}(SpeakeasyBase));
export { UpdateEmailTemplateHeaders };
// UpdateEmailTemplateRequestBodyTemplateContent
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
var UpdateEmailTemplateRequestBodyTemplateContent = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateRequestBodyTemplateContent, _super);
    function UpdateEmailTemplateRequestBodyTemplateContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Html" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyTemplateContent.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyTemplateContent.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyTemplateContent.prototype, "text", void 0);
    return UpdateEmailTemplateRequestBodyTemplateContent;
}(SpeakeasyBase));
export { UpdateEmailTemplateRequestBodyTemplateContent };
var UpdateEmailTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateRequestBody, _super);
    function UpdateEmailTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateContent" }),
        __metadata("design:type", UpdateEmailTemplateRequestBodyTemplateContent)
    ], UpdateEmailTemplateRequestBody.prototype, "templateContent", void 0);
    return UpdateEmailTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateEmailTemplateRequestBody };
var UpdateEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateRequest, _super);
    function UpdateEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmailTemplatePathParams)
    ], UpdateEmailTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmailTemplateHeaders)
    ], UpdateEmailTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEmailTemplateRequestBody)
    ], UpdateEmailTemplateRequest.prototype, "request", void 0);
    return UpdateEmailTemplateRequest;
}(SpeakeasyBase));
export { UpdateEmailTemplateRequest };
var UpdateEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateResponse, _super);
    function UpdateEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEmailTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailTemplateResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateEmailTemplateResponse.prototype, "updateEmailTemplateResponse", void 0);
    return UpdateEmailTemplateResponse;
}(SpeakeasyBase));
export { UpdateEmailTemplateResponse };
