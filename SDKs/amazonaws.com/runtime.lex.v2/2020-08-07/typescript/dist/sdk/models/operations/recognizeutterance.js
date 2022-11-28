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
var RecognizeUtterancePathParams = /** @class */ (function (_super) {
    __extends(RecognizeUtterancePathParams, _super);
    function RecognizeUtterancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" }),
        __metadata("design:type", String)
    ], RecognizeUtterancePathParams.prototype, "botAliasId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], RecognizeUtterancePathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], RecognizeUtterancePathParams.prototype, "localeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], RecognizeUtterancePathParams.prototype, "sessionId", void 0);
    return RecognizeUtterancePathParams;
}(SpeakeasyBase));
export { RecognizeUtterancePathParams };
var RecognizeUtteranceHeaders = /** @class */ (function (_super) {
    __extends(RecognizeUtteranceHeaders, _super);
    function RecognizeUtteranceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Response-Content-Type" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "responseContentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-lex-request-attributes" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzLexRequestAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-lex-session-state" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceHeaders.prototype, "xAmzLexSessionState", void 0);
    return RecognizeUtteranceHeaders;
}(SpeakeasyBase));
export { RecognizeUtteranceHeaders };
var RecognizeUtteranceRequestBody = /** @class */ (function (_super) {
    __extends(RecognizeUtteranceRequestBody, _super);
    function RecognizeUtteranceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputStream" }),
        __metadata("design:type", String)
    ], RecognizeUtteranceRequestBody.prototype, "inputStream", void 0);
    return RecognizeUtteranceRequestBody;
}(SpeakeasyBase));
export { RecognizeUtteranceRequestBody };
var RecognizeUtteranceRequest = /** @class */ (function (_super) {
    __extends(RecognizeUtteranceRequest, _super);
    function RecognizeUtteranceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecognizeUtterancePathParams)
    ], RecognizeUtteranceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecognizeUtteranceHeaders)
    ], RecognizeUtteranceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RecognizeUtteranceRequestBody)
    ], RecognizeUtteranceRequest.prototype, "request", void 0);
    return RecognizeUtteranceRequest;
}(SpeakeasyBase));
export { RecognizeUtteranceRequest };
var RecognizeUtteranceResponse = /** @class */ (function (_super) {
    __extends(RecognizeUtteranceResponse, _super);
    function RecognizeUtteranceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "badGatewayException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecognizeUtteranceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "dependencyFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RecognizeUtteranceResponse)
    ], RecognizeUtteranceResponse.prototype, "recognizeUtteranceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecognizeUtteranceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RecognizeUtteranceResponse.prototype, "validationException", void 0);
    return RecognizeUtteranceResponse;
}(SpeakeasyBase));
export { RecognizeUtteranceResponse };
