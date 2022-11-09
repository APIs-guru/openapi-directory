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
var KeywordExtractionRequestBody = /** @class */ (function (_super) {
    __extends(KeywordExtractionRequestBody, _super);
    function KeywordExtractionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=api_key;" }),
        __metadata("design:type", String)
    ], KeywordExtractionRequestBody.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "form, name=n;" }),
        __metadata("design:type", Number)
    ], KeywordExtractionRequestBody.prototype, "n", void 0);
    __decorate([
        Metadata({ data: "form, name=text;" }),
        __metadata("design:type", String)
    ], KeywordExtractionRequestBody.prototype, "text", void 0);
    return KeywordExtractionRequestBody;
}(SpeakeasyBase));
export { KeywordExtractionRequestBody };
var KeywordExtractionRequest = /** @class */ (function (_super) {
    __extends(KeywordExtractionRequest, _super);
    function KeywordExtractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", KeywordExtractionRequestBody)
    ], KeywordExtractionRequest.prototype, "request", void 0);
    return KeywordExtractionRequest;
}(SpeakeasyBase));
export { KeywordExtractionRequest };
var KeywordExtractionResponse = /** @class */ (function (_super) {
    __extends(KeywordExtractionResponse, _super);
    function KeywordExtractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], KeywordExtractionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], KeywordExtractionResponse.prototype, "statusCode", void 0);
    return KeywordExtractionResponse;
}(SpeakeasyBase));
export { KeywordExtractionResponse };
