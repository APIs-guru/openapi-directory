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
var CreateEmailTemplatePathParams = /** @class */ (function (_super) {
    __extends(CreateEmailTemplatePathParams, _super);
    function CreateEmailTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], CreateEmailTemplatePathParams.prototype, "templateName", void 0);
    return CreateEmailTemplatePathParams;
}(SpeakeasyBase));
export { CreateEmailTemplatePathParams };
var CreateEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateEmailTemplateHeaders, _super);
    function CreateEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateEmailTemplateHeaders;
}(SpeakeasyBase));
export { CreateEmailTemplateHeaders };
// CreateEmailTemplateRequestBodyEmailTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
**/
var CreateEmailTemplateRequestBodyEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateEmailTemplateRequestBodyEmailTemplateRequest, _super);
    function CreateEmailTemplateRequestBodyEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HtmlPart" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "htmlPart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommenderId" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "recommenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextPart" }),
        __metadata("design:type", String)
    ], CreateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "textPart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "tags", void 0);
    return CreateEmailTemplateRequestBodyEmailTemplateRequest;
}(SpeakeasyBase));
export { CreateEmailTemplateRequestBodyEmailTemplateRequest };
var CreateEmailTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateEmailTemplateRequestBody, _super);
    function CreateEmailTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailTemplateRequest" }),
        __metadata("design:type", CreateEmailTemplateRequestBodyEmailTemplateRequest)
    ], CreateEmailTemplateRequestBody.prototype, "emailTemplateRequest", void 0);
    return CreateEmailTemplateRequestBody;
}(SpeakeasyBase));
export { CreateEmailTemplateRequestBody };
var CreateEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateEmailTemplateRequest, _super);
    function CreateEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEmailTemplatePathParams)
    ], CreateEmailTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEmailTemplateHeaders)
    ], CreateEmailTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEmailTemplateRequestBody)
    ], CreateEmailTemplateRequest.prototype, "request", void 0);
    return CreateEmailTemplateRequest;
}(SpeakeasyBase));
export { CreateEmailTemplateRequest };
var CreateEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateEmailTemplateResponse, _super);
    function CreateEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateEmailTemplateResponse)
    ], CreateEmailTemplateResponse.prototype, "createEmailTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEmailTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return CreateEmailTemplateResponse;
}(SpeakeasyBase));
export { CreateEmailTemplateResponse };
