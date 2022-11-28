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
var UpdateEmailTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplatePathParams, _super);
    function UpdateEmailTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplatePathParams.prototype, "templateName", void 0);
    return UpdateEmailTemplatePathParams;
}(SpeakeasyBase));
export { UpdateEmailTemplatePathParams };
var UpdateEmailTemplateQueryParams = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateQueryParams, _super);
    function UpdateEmailTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=create-new-version" }),
        __metadata("design:type", Boolean)
    ], UpdateEmailTemplateQueryParams.prototype, "createNewVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateQueryParams.prototype, "version", void 0);
    return UpdateEmailTemplateQueryParams;
}(SpeakeasyBase));
export { UpdateEmailTemplateQueryParams };
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
// UpdateEmailTemplateRequestBodyEmailTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
**/
var UpdateEmailTemplateRequestBodyEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateRequestBodyEmailTemplateRequest, _super);
    function UpdateEmailTemplateRequestBodyEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HtmlPart" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "htmlPart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommenderId" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "recommenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextPart" }),
        __metadata("design:type", String)
    ], UpdateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "textPart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], UpdateEmailTemplateRequestBodyEmailTemplateRequest.prototype, "tags", void 0);
    return UpdateEmailTemplateRequestBodyEmailTemplateRequest;
}(SpeakeasyBase));
export { UpdateEmailTemplateRequestBodyEmailTemplateRequest };
var UpdateEmailTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateRequestBody, _super);
    function UpdateEmailTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailTemplateRequest" }),
        __metadata("design:type", UpdateEmailTemplateRequestBodyEmailTemplateRequest)
    ], UpdateEmailTemplateRequestBody.prototype, "emailTemplateRequest", void 0);
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
        __metadata("design:type", UpdateEmailTemplateQueryParams)
    ], UpdateEmailTemplateRequest.prototype, "queryParams", void 0);
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
    ], UpdateEmailTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailTemplateResponse.prototype, "payloadTooLargeException", void 0);
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
        __metadata("design:type", shared.UpdateEmailTemplateResponse)
    ], UpdateEmailTemplateResponse.prototype, "updateEmailTemplateResponse", void 0);
    return UpdateEmailTemplateResponse;
}(SpeakeasyBase));
export { UpdateEmailTemplateResponse };
