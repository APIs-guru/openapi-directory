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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var TwitterSentimentAnalysisRequestBody = /** @class */ (function (_super) {
    __extends(TwitterSentimentAnalysisRequestBody, _super);
    function TwitterSentimentAnalysisRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=api_key;" }),
        __metadata("design:type", String)
    ], TwitterSentimentAnalysisRequestBody.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "form, name=text;" }),
        __metadata("design:type", String)
    ], TwitterSentimentAnalysisRequestBody.prototype, "text", void 0);
    return TwitterSentimentAnalysisRequestBody;
}(SpeakeasyBase));
export { TwitterSentimentAnalysisRequestBody };
var TwitterSentimentAnalysisRequest = /** @class */ (function (_super) {
    __extends(TwitterSentimentAnalysisRequest, _super);
    function TwitterSentimentAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", TwitterSentimentAnalysisRequestBody)
    ], TwitterSentimentAnalysisRequest.prototype, "request", void 0);
    return TwitterSentimentAnalysisRequest;
}(SpeakeasyBase));
export { TwitterSentimentAnalysisRequest };
var TwitterSentimentAnalysisResponse = /** @class */ (function (_super) {
    __extends(TwitterSentimentAnalysisResponse, _super);
    function TwitterSentimentAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TwitterSentimentAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TwitterSentimentAnalysisResponse.prototype, "statusCode", void 0);
    return TwitterSentimentAnalysisResponse;
}(SpeakeasyBase));
export { TwitterSentimentAnalysisResponse };
