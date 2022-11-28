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
var CreateBotAliasPathParams = /** @class */ (function (_super) {
    __extends(CreateBotAliasPathParams, _super);
    function CreateBotAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], CreateBotAliasPathParams.prototype, "botId", void 0);
    return CreateBotAliasPathParams;
}(SpeakeasyBase));
export { CreateBotAliasPathParams };
var CreateBotAliasHeaders = /** @class */ (function (_super) {
    __extends(CreateBotAliasHeaders, _super);
    function CreateBotAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBotAliasHeaders;
}(SpeakeasyBase));
export { CreateBotAliasHeaders };
// CreateBotAliasRequestBodyConversationLogSettings
/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
var CreateBotAliasRequestBodyConversationLogSettings = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequestBodyConversationLogSettings, _super);
    function CreateBotAliasRequestBodyConversationLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting }),
        __metadata("design:type", Array)
    ], CreateBotAliasRequestBodyConversationLogSettings.prototype, "audioLogSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting }),
        __metadata("design:type", Array)
    ], CreateBotAliasRequestBodyConversationLogSettings.prototype, "textLogSettings", void 0);
    return CreateBotAliasRequestBodyConversationLogSettings;
}(SpeakeasyBase));
export { CreateBotAliasRequestBodyConversationLogSettings };
// CreateBotAliasRequestBodySentimentAnalysisSettings
/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
var CreateBotAliasRequestBodySentimentAnalysisSettings = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequestBodySentimentAnalysisSettings, _super);
    function CreateBotAliasRequestBodySentimentAnalysisSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectSentiment" }),
        __metadata("design:type", Boolean)
    ], CreateBotAliasRequestBodySentimentAnalysisSettings.prototype, "detectSentiment", void 0);
    return CreateBotAliasRequestBodySentimentAnalysisSettings;
}(SpeakeasyBase));
export { CreateBotAliasRequestBodySentimentAnalysisSettings };
var CreateBotAliasRequestBody = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequestBody, _super);
    function CreateBotAliasRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings }),
        __metadata("design:type", Map)
    ], CreateBotAliasRequestBody.prototype, "botAliasLocaleSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botAliasName" }),
        __metadata("design:type", String)
    ], CreateBotAliasRequestBody.prototype, "botAliasName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], CreateBotAliasRequestBody.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationLogSettings" }),
        __metadata("design:type", CreateBotAliasRequestBodyConversationLogSettings)
    ], CreateBotAliasRequestBody.prototype, "conversationLogSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateBotAliasRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentAnalysisSettings" }),
        __metadata("design:type", CreateBotAliasRequestBodySentimentAnalysisSettings)
    ], CreateBotAliasRequestBody.prototype, "sentimentAnalysisSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateBotAliasRequestBody.prototype, "tags", void 0);
    return CreateBotAliasRequestBody;
}(SpeakeasyBase));
export { CreateBotAliasRequestBody };
var CreateBotAliasRequest = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequest, _super);
    function CreateBotAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBotAliasPathParams)
    ], CreateBotAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBotAliasHeaders)
    ], CreateBotAliasRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBotAliasRequestBody)
    ], CreateBotAliasRequest.prototype, "request", void 0);
    return CreateBotAliasRequest;
}(SpeakeasyBase));
export { CreateBotAliasRequest };
var CreateBotAliasResponse = /** @class */ (function (_super) {
    __extends(CreateBotAliasResponse, _super);
    function CreateBotAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBotAliasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBotAliasResponse)
    ], CreateBotAliasResponse.prototype, "createBotAliasResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBotAliasResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "validationException", void 0);
    return CreateBotAliasResponse;
}(SpeakeasyBase));
export { CreateBotAliasResponse };
