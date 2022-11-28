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
var PutBotPathParams = /** @class */ (function (_super) {
    __extends(PutBotPathParams, _super);
    function PutBotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PutBotPathParams.prototype, "name", void 0);
    return PutBotPathParams;
}(SpeakeasyBase));
export { PutBotPathParams };
var PutBotHeaders = /** @class */ (function (_super) {
    __extends(PutBotHeaders, _super);
    function PutBotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutBotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutBotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutBotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutBotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutBotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutBotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutBotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutBotHeaders;
}(SpeakeasyBase));
export { PutBotHeaders };
// PutBotRequestBodyAbortStatement
/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
**/
var PutBotRequestBodyAbortStatement = /** @class */ (function (_super) {
    __extends(PutBotRequestBodyAbortStatement, _super);
    function PutBotRequestBodyAbortStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message }),
        __metadata("design:type", Array)
    ], PutBotRequestBodyAbortStatement.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseCard" }),
        __metadata("design:type", String)
    ], PutBotRequestBodyAbortStatement.prototype, "responseCard", void 0);
    return PutBotRequestBodyAbortStatement;
}(SpeakeasyBase));
export { PutBotRequestBodyAbortStatement };
// PutBotRequestBodyClarificationPrompt
/**
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
var PutBotRequestBodyClarificationPrompt = /** @class */ (function (_super) {
    __extends(PutBotRequestBodyClarificationPrompt, _super);
    function PutBotRequestBodyClarificationPrompt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAttempts" }),
        __metadata("design:type", Number)
    ], PutBotRequestBodyClarificationPrompt.prototype, "maxAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message }),
        __metadata("design:type", Array)
    ], PutBotRequestBodyClarificationPrompt.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseCard" }),
        __metadata("design:type", String)
    ], PutBotRequestBodyClarificationPrompt.prototype, "responseCard", void 0);
    return PutBotRequestBodyClarificationPrompt;
}(SpeakeasyBase));
export { PutBotRequestBodyClarificationPrompt };
export var PutBotRequestBodyLocaleEnum;
(function (PutBotRequestBodyLocaleEnum) {
    PutBotRequestBodyLocaleEnum["DeDe"] = "de-DE";
    PutBotRequestBodyLocaleEnum["EnAu"] = "en-AU";
    PutBotRequestBodyLocaleEnum["EnGb"] = "en-GB";
    PutBotRequestBodyLocaleEnum["EnIn"] = "en-IN";
    PutBotRequestBodyLocaleEnum["EnUs"] = "en-US";
    PutBotRequestBodyLocaleEnum["Es419"] = "es-419";
    PutBotRequestBodyLocaleEnum["EsEs"] = "es-ES";
    PutBotRequestBodyLocaleEnum["EsUs"] = "es-US";
    PutBotRequestBodyLocaleEnum["FrFr"] = "fr-FR";
    PutBotRequestBodyLocaleEnum["FrCa"] = "fr-CA";
    PutBotRequestBodyLocaleEnum["ItIt"] = "it-IT";
    PutBotRequestBodyLocaleEnum["JaJp"] = "ja-JP";
    PutBotRequestBodyLocaleEnum["KoKr"] = "ko-KR";
})(PutBotRequestBodyLocaleEnum || (PutBotRequestBodyLocaleEnum = {}));
export var PutBotRequestBodyProcessBehaviorEnum;
(function (PutBotRequestBodyProcessBehaviorEnum) {
    PutBotRequestBodyProcessBehaviorEnum["Save"] = "SAVE";
    PutBotRequestBodyProcessBehaviorEnum["Build"] = "BUILD";
})(PutBotRequestBodyProcessBehaviorEnum || (PutBotRequestBodyProcessBehaviorEnum = {}));
var PutBotRequestBody = /** @class */ (function (_super) {
    __extends(PutBotRequestBody, _super);
    function PutBotRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortStatement" }),
        __metadata("design:type", PutBotRequestBodyAbortStatement)
    ], PutBotRequestBody.prototype, "abortStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], PutBotRequestBody.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childDirected" }),
        __metadata("design:type", Boolean)
    ], PutBotRequestBody.prototype, "childDirected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clarificationPrompt" }),
        __metadata("design:type", PutBotRequestBodyClarificationPrompt)
    ], PutBotRequestBody.prototype, "clarificationPrompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createVersion" }),
        __metadata("design:type", Boolean)
    ], PutBotRequestBody.prototype, "createVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutBotRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectSentiment" }),
        __metadata("design:type", Boolean)
    ], PutBotRequestBody.prototype, "detectSentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableModelImprovements" }),
        __metadata("design:type", Boolean)
    ], PutBotRequestBody.prototype, "enableModelImprovements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" }),
        __metadata("design:type", Number)
    ], PutBotRequestBody.prototype, "idleSessionTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intents", elemType: shared.Intent }),
        __metadata("design:type", Array)
    ], PutBotRequestBody.prototype, "intents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], PutBotRequestBody.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], PutBotRequestBody.prototype, "nluIntentConfidenceThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processBehavior" }),
        __metadata("design:type", String)
    ], PutBotRequestBody.prototype, "processBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], PutBotRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceId" }),
        __metadata("design:type", String)
    ], PutBotRequestBody.prototype, "voiceId", void 0);
    return PutBotRequestBody;
}(SpeakeasyBase));
export { PutBotRequestBody };
var PutBotRequest = /** @class */ (function (_super) {
    __extends(PutBotRequest, _super);
    function PutBotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBotPathParams)
    ], PutBotRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBotHeaders)
    ], PutBotRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutBotRequestBody)
    ], PutBotRequest.prototype, "request", void 0);
    return PutBotRequest;
}(SpeakeasyBase));
export { PutBotRequest };
var PutBotResponse = /** @class */ (function (_super) {
    __extends(PutBotResponse, _super);
    function PutBotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutBotResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutBotResponse)
    ], PutBotResponse.prototype, "putBotResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutBotResponse.prototype, "statusCode", void 0);
    return PutBotResponse;
}(SpeakeasyBase));
export { PutBotResponse };
