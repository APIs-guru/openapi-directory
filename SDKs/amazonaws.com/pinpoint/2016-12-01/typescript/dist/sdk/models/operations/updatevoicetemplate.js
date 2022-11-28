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
var UpdateVoiceTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplatePathParams, _super);
    function UpdateVoiceTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplatePathParams.prototype, "templateName", void 0);
    return UpdateVoiceTemplatePathParams;
}(SpeakeasyBase));
export { UpdateVoiceTemplatePathParams };
var UpdateVoiceTemplateQueryParams = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplateQueryParams, _super);
    function UpdateVoiceTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=create-new-version" }),
        __metadata("design:type", Boolean)
    ], UpdateVoiceTemplateQueryParams.prototype, "createNewVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateQueryParams.prototype, "version", void 0);
    return UpdateVoiceTemplateQueryParams;
}(SpeakeasyBase));
export { UpdateVoiceTemplateQueryParams };
var UpdateVoiceTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplateHeaders, _super);
    function UpdateVoiceTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateVoiceTemplateHeaders;
}(SpeakeasyBase));
export { UpdateVoiceTemplateHeaders };
// UpdateVoiceTemplateRequestBodyVoiceTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
var UpdateVoiceTemplateRequestBodyVoiceTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplateRequestBodyVoiceTemplateRequest, _super);
    function UpdateVoiceTemplateRequestBodyVoiceTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceId" }),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "voiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], UpdateVoiceTemplateRequestBodyVoiceTemplateRequest.prototype, "tags", void 0);
    return UpdateVoiceTemplateRequestBodyVoiceTemplateRequest;
}(SpeakeasyBase));
export { UpdateVoiceTemplateRequestBodyVoiceTemplateRequest };
var UpdateVoiceTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplateRequestBody, _super);
    function UpdateVoiceTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceTemplateRequest" }),
        __metadata("design:type", UpdateVoiceTemplateRequestBodyVoiceTemplateRequest)
    ], UpdateVoiceTemplateRequestBody.prototype, "voiceTemplateRequest", void 0);
    return UpdateVoiceTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateVoiceTemplateRequestBody };
var UpdateVoiceTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplateRequest, _super);
    function UpdateVoiceTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVoiceTemplatePathParams)
    ], UpdateVoiceTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVoiceTemplateQueryParams)
    ], UpdateVoiceTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVoiceTemplateHeaders)
    ], UpdateVoiceTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVoiceTemplateRequestBody)
    ], UpdateVoiceTemplateRequest.prototype, "request", void 0);
    return UpdateVoiceTemplateRequest;
}(SpeakeasyBase));
export { UpdateVoiceTemplateRequest };
var UpdateVoiceTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateVoiceTemplateResponse, _super);
    function UpdateVoiceTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVoiceTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceTemplateResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVoiceTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateVoiceTemplateResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateVoiceTemplateResponse)
    ], UpdateVoiceTemplateResponse.prototype, "updateVoiceTemplateResponse", void 0);
    return UpdateVoiceTemplateResponse;
}(SpeakeasyBase));
export { UpdateVoiceTemplateResponse };
