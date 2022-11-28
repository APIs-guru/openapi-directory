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
var RecognizeTextPathParams = /** @class */ (function (_super) {
    __extends(RecognizeTextPathParams, _super);
    function RecognizeTextPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" }),
        __metadata("design:type", String)
    ], RecognizeTextPathParams.prototype, "botAliasId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], RecognizeTextPathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], RecognizeTextPathParams.prototype, "localeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], RecognizeTextPathParams.prototype, "sessionId", void 0);
    return RecognizeTextPathParams;
}(SpeakeasyBase));
export { RecognizeTextPathParams };
var RecognizeTextHeaders = /** @class */ (function (_super) {
    __extends(RecognizeTextHeaders, _super);
    function RecognizeTextHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RecognizeTextHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RecognizeTextHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RecognizeTextHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RecognizeTextHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RecognizeTextHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RecognizeTextHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RecognizeTextHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RecognizeTextHeaders;
}(SpeakeasyBase));
export { RecognizeTextHeaders };
// RecognizeTextRequestBodySessionState
/**
 * The state of the user's session with Amazon Lex V2.
**/
var RecognizeTextRequestBodySessionState = /** @class */ (function (_super) {
    __extends(RecognizeTextRequestBodySessionState, _super);
    function RecognizeTextRequestBodySessionState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext }),
        __metadata("design:type", Array)
    ], RecognizeTextRequestBodySessionState.prototype, "activeContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogAction" }),
        __metadata("design:type", shared.DialogAction)
    ], RecognizeTextRequestBodySessionState.prototype, "dialogAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", shared.Intent)
    ], RecognizeTextRequestBodySessionState.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatingRequestId" }),
        __metadata("design:type", String)
    ], RecognizeTextRequestBodySessionState.prototype, "originatingRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionAttributes" }),
        __metadata("design:type", Map)
    ], RecognizeTextRequestBodySessionState.prototype, "sessionAttributes", void 0);
    return RecognizeTextRequestBodySessionState;
}(SpeakeasyBase));
export { RecognizeTextRequestBodySessionState };
var RecognizeTextRequestBody = /** @class */ (function (_super) {
    __extends(RecognizeTextRequestBody, _super);
    function RecognizeTextRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestAttributes" }),
        __metadata("design:type", Map)
    ], RecognizeTextRequestBody.prototype, "requestAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionState" }),
        __metadata("design:type", RecognizeTextRequestBodySessionState)
    ], RecognizeTextRequestBody.prototype, "sessionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], RecognizeTextRequestBody.prototype, "text", void 0);
    return RecognizeTextRequestBody;
}(SpeakeasyBase));
export { RecognizeTextRequestBody };
var RecognizeTextRequest = /** @class */ (function (_super) {
    __extends(RecognizeTextRequest, _super);
    function RecognizeTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecognizeTextPathParams)
    ], RecognizeTextRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecognizeTextHeaders)
    ], RecognizeTextRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RecognizeTextRequestBody)
    ], RecognizeTextRequest.prototype, "request", void 0);
    return RecognizeTextRequest;
}(SpeakeasyBase));
export { RecognizeTextRequest };
var RecognizeTextResponse = /** @class */ (function (_super) {
    __extends(RecognizeTextResponse, _super);
    function RecognizeTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "badGatewayException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecognizeTextResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "dependencyFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RecognizeTextResponse)
    ], RecognizeTextResponse.prototype, "recognizeTextResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecognizeTextResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeTextResponse.prototype, "validationException", void 0);
    return RecognizeTextResponse;
}(SpeakeasyBase));
export { RecognizeTextResponse };
