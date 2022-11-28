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
var CreateSmsTemplatePathParams = /** @class */ (function (_super) {
    __extends(CreateSmsTemplatePathParams, _super);
    function CreateSmsTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], CreateSmsTemplatePathParams.prototype, "templateName", void 0);
    return CreateSmsTemplatePathParams;
}(SpeakeasyBase));
export { CreateSmsTemplatePathParams };
var CreateSmsTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateSmsTemplateHeaders, _super);
    function CreateSmsTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSmsTemplateHeaders;
}(SpeakeasyBase));
export { CreateSmsTemplateHeaders };
// CreateSmsTemplateRequestBodySmsTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
var CreateSmsTemplateRequestBodySmsTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateSmsTemplateRequestBodySmsTemplateRequest, _super);
    function CreateSmsTemplateRequestBodySmsTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateRequestBodySmsTemplateRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateRequestBodySmsTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommenderId" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateRequestBodySmsTemplateRequest.prototype, "recommenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], CreateSmsTemplateRequestBodySmsTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateSmsTemplateRequestBodySmsTemplateRequest.prototype, "tags", void 0);
    return CreateSmsTemplateRequestBodySmsTemplateRequest;
}(SpeakeasyBase));
export { CreateSmsTemplateRequestBodySmsTemplateRequest };
var CreateSmsTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateSmsTemplateRequestBody, _super);
    function CreateSmsTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SMSTemplateRequest" }),
        __metadata("design:type", CreateSmsTemplateRequestBodySmsTemplateRequest)
    ], CreateSmsTemplateRequestBody.prototype, "smsTemplateRequest", void 0);
    return CreateSmsTemplateRequestBody;
}(SpeakeasyBase));
export { CreateSmsTemplateRequestBody };
var CreateSmsTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateSmsTemplateRequest, _super);
    function CreateSmsTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSmsTemplatePathParams)
    ], CreateSmsTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSmsTemplateHeaders)
    ], CreateSmsTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSmsTemplateRequestBody)
    ], CreateSmsTemplateRequest.prototype, "request", void 0);
    return CreateSmsTemplateRequest;
}(SpeakeasyBase));
export { CreateSmsTemplateRequest };
var CreateSmsTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateSmsTemplateResponse, _super);
    function CreateSmsTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSmsTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSmsTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSmsTemplateResponse)
    ], CreateSmsTemplateResponse.prototype, "createSmsTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSmsTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSmsTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSmsTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSmsTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSmsTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return CreateSmsTemplateResponse;
}(SpeakeasyBase));
export { CreateSmsTemplateResponse };
