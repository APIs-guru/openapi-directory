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
var PostContentproSimilarTextRequestBody = /** @class */ (function (_super) {
    __extends(PostContentproSimilarTextRequestBody, _super);
    function PostContentproSimilarTextRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], PostContentproSimilarTextRequestBody.prototype, "text", void 0);
    return PostContentproSimilarTextRequestBody;
}(SpeakeasyBase));
export { PostContentproSimilarTextRequestBody };
var PostContentproSimilarText200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(PostContentproSimilarText200ApplicationJsonData, _super);
    function PostContentproSimilarText200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=article" }),
        __metadata("design:type", shared.Article)
    ], PostContentproSimilarText200ApplicationJsonData.prototype, "article", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", shared.ContentProCompany)
    ], PostContentproSimilarText200ApplicationJsonData.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippets" }),
        __metadata("design:type", shared.ContentProSnippets)
    ], PostContentproSimilarText200ApplicationJsonData.prototype, "snippets", void 0);
    return PostContentproSimilarText200ApplicationJsonData;
}(SpeakeasyBase));
export { PostContentproSimilarText200ApplicationJsonData };
var PostContentproSimilarText200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostContentproSimilarText200ApplicationJson, _super);
    function PostContentproSimilarText200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calls_per_month" }),
        __metadata("design:type", String)
    ], PostContentproSimilarText200ApplicationJson.prototype, "callsPerMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_remaining" }),
        __metadata("design:type", String)
    ], PostContentproSimilarText200ApplicationJson.prototype, "countRemaining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: PostContentproSimilarText200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], PostContentproSimilarText200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewal_date" }),
        __metadata("design:type", String)
    ], PostContentproSimilarText200ApplicationJson.prototype, "renewalDate", void 0);
    return PostContentproSimilarText200ApplicationJson;
}(SpeakeasyBase));
export { PostContentproSimilarText200ApplicationJson };
var PostContentproSimilarTextRequest = /** @class */ (function (_super) {
    __extends(PostContentproSimilarTextRequest, _super);
    function PostContentproSimilarTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostContentproSimilarTextRequestBody)
    ], PostContentproSimilarTextRequest.prototype, "request", void 0);
    return PostContentproSimilarTextRequest;
}(SpeakeasyBase));
export { PostContentproSimilarTextRequest };
var PostContentproSimilarTextResponse = /** @class */ (function (_super) {
    __extends(PostContentproSimilarTextResponse, _super);
    function PostContentproSimilarTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostContentproSimilarTextResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostContentproSimilarText200ApplicationJson)
    ], PostContentproSimilarTextResponse.prototype, "postContentproSimilarText200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostContentproSimilarTextResponse.prototype, "statusCode", void 0);
    return PostContentproSimilarTextResponse;
}(SpeakeasyBase));
export { PostContentproSimilarTextResponse };
