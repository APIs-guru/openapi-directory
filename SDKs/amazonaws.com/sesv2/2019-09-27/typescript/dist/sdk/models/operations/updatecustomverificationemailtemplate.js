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
var UpdateCustomVerificationEmailTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateCustomVerificationEmailTemplatePathParams, _super);
    function UpdateCustomVerificationEmailTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplatePathParams.prototype, "templateName", void 0);
    return UpdateCustomVerificationEmailTemplatePathParams;
}(SpeakeasyBase));
export { UpdateCustomVerificationEmailTemplatePathParams };
var UpdateCustomVerificationEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateCustomVerificationEmailTemplateHeaders, _super);
    function UpdateCustomVerificationEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateCustomVerificationEmailTemplateHeaders;
}(SpeakeasyBase));
export { UpdateCustomVerificationEmailTemplateHeaders };
var UpdateCustomVerificationEmailTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCustomVerificationEmailTemplateRequestBody, _super);
    function UpdateCustomVerificationEmailTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureRedirectionURL" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateRequestBody.prototype, "failureRedirectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FromEmailAddress" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateRequestBody.prototype, "fromEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuccessRedirectionURL" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateRequestBody.prototype, "successRedirectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateContent" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateRequestBody.prototype, "templateContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateSubject" }),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateRequestBody.prototype, "templateSubject", void 0);
    return UpdateCustomVerificationEmailTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateCustomVerificationEmailTemplateRequestBody };
var UpdateCustomVerificationEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateCustomVerificationEmailTemplateRequest, _super);
    function UpdateCustomVerificationEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCustomVerificationEmailTemplatePathParams)
    ], UpdateCustomVerificationEmailTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCustomVerificationEmailTemplateHeaders)
    ], UpdateCustomVerificationEmailTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCustomVerificationEmailTemplateRequestBody)
    ], UpdateCustomVerificationEmailTemplateRequest.prototype, "request", void 0);
    return UpdateCustomVerificationEmailTemplateRequest;
}(SpeakeasyBase));
export { UpdateCustomVerificationEmailTemplateRequest };
var UpdateCustomVerificationEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateCustomVerificationEmailTemplateResponse, _super);
    function UpdateCustomVerificationEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomVerificationEmailTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCustomVerificationEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomVerificationEmailTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCustomVerificationEmailTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateCustomVerificationEmailTemplateResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateCustomVerificationEmailTemplateResponse.prototype, "updateCustomVerificationEmailTemplateResponse", void 0);
    return UpdateCustomVerificationEmailTemplateResponse;
}(SpeakeasyBase));
export { UpdateCustomVerificationEmailTemplateResponse };
