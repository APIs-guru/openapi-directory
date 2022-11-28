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
var CreateVoiceTemplatePathParams = /** @class */ (function (_super) {
    __extends(CreateVoiceTemplatePathParams, _super);
    function CreateVoiceTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplatePathParams.prototype, "templateName", void 0);
    return CreateVoiceTemplatePathParams;
}(SpeakeasyBase));
export { CreateVoiceTemplatePathParams };
var CreateVoiceTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateVoiceTemplateHeaders, _super);
    function CreateVoiceTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateVoiceTemplateHeaders;
}(SpeakeasyBase));
export { CreateVoiceTemplateHeaders };
// CreateVoiceTemplateRequestBodyVoiceTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
var CreateVoiceTemplateRequestBodyVoiceTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateVoiceTemplateRequestBodyVoiceTemplateRequest, _super);
    function CreateVoiceTemplateRequestBodyVoiceTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceId" }),
        __metadata("design:type", String)
    ], CreateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "voiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "tags", void 0);
    return CreateVoiceTemplateRequestBodyVoiceTemplateRequest;
}(SpeakeasyBase));
export { CreateVoiceTemplateRequestBodyVoiceTemplateRequest };
var CreateVoiceTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateVoiceTemplateRequestBody, _super);
    function CreateVoiceTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceTemplateRequest" }),
        __metadata("design:type", CreateVoiceTemplateRequestBodyVoiceTemplateRequest)
    ], CreateVoiceTemplateRequestBody.prototype, "voiceTemplateRequest", void 0);
    return CreateVoiceTemplateRequestBody;
}(SpeakeasyBase));
export { CreateVoiceTemplateRequestBody };
var CreateVoiceTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateVoiceTemplateRequest, _super);
    function CreateVoiceTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVoiceTemplatePathParams)
    ], CreateVoiceTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVoiceTemplateHeaders)
    ], CreateVoiceTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVoiceTemplateRequestBody)
    ], CreateVoiceTemplateRequest.prototype, "request", void 0);
    return CreateVoiceTemplateRequest;
}(SpeakeasyBase));
export { CreateVoiceTemplateRequest };
var CreateVoiceTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateVoiceTemplateResponse, _super);
    function CreateVoiceTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVoiceTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVoiceTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateVoiceTemplateResponse)
    ], CreateVoiceTemplateResponse.prototype, "createVoiceTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVoiceTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVoiceTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVoiceTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVoiceTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVoiceTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return CreateVoiceTemplateResponse;
}(SpeakeasyBase));
export { CreateVoiceTemplateResponse };
