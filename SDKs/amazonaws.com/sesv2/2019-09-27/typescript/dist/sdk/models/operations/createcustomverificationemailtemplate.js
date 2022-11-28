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
var CreateCustomVerificationEmailTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomVerificationEmailTemplateHeaders, _super);
    function CreateCustomVerificationEmailTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCustomVerificationEmailTemplateHeaders;
}(SpeakeasyBase));
export { CreateCustomVerificationEmailTemplateHeaders };
var CreateCustomVerificationEmailTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateCustomVerificationEmailTemplateRequestBody, _super);
    function CreateCustomVerificationEmailTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureRedirectionURL" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateRequestBody.prototype, "failureRedirectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FromEmailAddress" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateRequestBody.prototype, "fromEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuccessRedirectionURL" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateRequestBody.prototype, "successRedirectionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateContent" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateRequestBody.prototype, "templateContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateName" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateRequestBody.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateSubject" }),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateRequestBody.prototype, "templateSubject", void 0);
    return CreateCustomVerificationEmailTemplateRequestBody;
}(SpeakeasyBase));
export { CreateCustomVerificationEmailTemplateRequestBody };
var CreateCustomVerificationEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateCustomVerificationEmailTemplateRequest, _super);
    function CreateCustomVerificationEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomVerificationEmailTemplateHeaders)
    ], CreateCustomVerificationEmailTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCustomVerificationEmailTemplateRequestBody)
    ], CreateCustomVerificationEmailTemplateRequest.prototype, "request", void 0);
    return CreateCustomVerificationEmailTemplateRequest;
}(SpeakeasyBase));
export { CreateCustomVerificationEmailTemplateRequest };
var CreateCustomVerificationEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateCustomVerificationEmailTemplateResponse, _super);
    function CreateCustomVerificationEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "alreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "createCustomVerificationEmailTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCustomVerificationEmailTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return CreateCustomVerificationEmailTemplateResponse;
}(SpeakeasyBase));
export { CreateCustomVerificationEmailTemplateResponse };
