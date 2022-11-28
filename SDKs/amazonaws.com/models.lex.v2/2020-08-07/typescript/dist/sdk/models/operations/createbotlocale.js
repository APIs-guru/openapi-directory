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
var CreateBotLocalePathParams = /** @class */ (function (_super) {
    __extends(CreateBotLocalePathParams, _super);
    function CreateBotLocalePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], CreateBotLocalePathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], CreateBotLocalePathParams.prototype, "botVersion", void 0);
    return CreateBotLocalePathParams;
}(SpeakeasyBase));
export { CreateBotLocalePathParams };
var CreateBotLocaleHeaders = /** @class */ (function (_super) {
    __extends(CreateBotLocaleHeaders, _super);
    function CreateBotLocaleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBotLocaleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBotLocaleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBotLocaleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBotLocaleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBotLocaleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBotLocaleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBotLocaleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBotLocaleHeaders;
}(SpeakeasyBase));
export { CreateBotLocaleHeaders };
// CreateBotLocaleRequestBodyVoiceSettings
/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
var CreateBotLocaleRequestBodyVoiceSettings = /** @class */ (function (_super) {
    __extends(CreateBotLocaleRequestBodyVoiceSettings, _super);
    function CreateBotLocaleRequestBodyVoiceSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceId" }),
        __metadata("design:type", String)
    ], CreateBotLocaleRequestBodyVoiceSettings.prototype, "voiceId", void 0);
    return CreateBotLocaleRequestBodyVoiceSettings;
}(SpeakeasyBase));
export { CreateBotLocaleRequestBodyVoiceSettings };
var CreateBotLocaleRequestBody = /** @class */ (function (_super) {
    __extends(CreateBotLocaleRequestBody, _super);
    function CreateBotLocaleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateBotLocaleRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localeId" }),
        __metadata("design:type", String)
    ], CreateBotLocaleRequestBody.prototype, "localeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], CreateBotLocaleRequestBody.prototype, "nluIntentConfidenceThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceSettings" }),
        __metadata("design:type", CreateBotLocaleRequestBodyVoiceSettings)
    ], CreateBotLocaleRequestBody.prototype, "voiceSettings", void 0);
    return CreateBotLocaleRequestBody;
}(SpeakeasyBase));
export { CreateBotLocaleRequestBody };
var CreateBotLocaleRequest = /** @class */ (function (_super) {
    __extends(CreateBotLocaleRequest, _super);
    function CreateBotLocaleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBotLocalePathParams)
    ], CreateBotLocaleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBotLocaleHeaders)
    ], CreateBotLocaleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBotLocaleRequestBody)
    ], CreateBotLocaleRequest.prototype, "request", void 0);
    return CreateBotLocaleRequest;
}(SpeakeasyBase));
export { CreateBotLocaleRequest };
var CreateBotLocaleResponse = /** @class */ (function (_super) {
    __extends(CreateBotLocaleResponse, _super);
    function CreateBotLocaleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotLocaleResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBotLocaleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBotLocaleResponse)
    ], CreateBotLocaleResponse.prototype, "createBotLocaleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotLocaleResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotLocaleResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotLocaleResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBotLocaleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotLocaleResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotLocaleResponse.prototype, "validationException", void 0);
    return CreateBotLocaleResponse;
}(SpeakeasyBase));
export { CreateBotLocaleResponse };
