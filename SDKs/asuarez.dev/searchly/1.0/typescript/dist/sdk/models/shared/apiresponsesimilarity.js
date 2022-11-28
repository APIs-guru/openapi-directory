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
// ApiResponseSimilarityResponseSimilarityList
/**
 * Song similarity item.
**/
var ApiResponseSimilarityResponseSimilarityList = /** @class */ (function (_super) {
    __extends(ApiResponseSimilarityResponseSimilarityList, _super);
    function ApiResponseSimilarityResponseSimilarityList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artist_name" }),
        __metadata("design:type", String)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "artistName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artist_url" }),
        __metadata("design:type", String)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "artistUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index_id" }),
        __metadata("design:type", Number)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "indexId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lyrics" }),
        __metadata("design:type", String)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "lyrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=song_name" }),
        __metadata("design:type", String)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "songName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=song_url" }),
        __metadata("design:type", String)
    ], ApiResponseSimilarityResponseSimilarityList.prototype, "songUrl", void 0);
    return ApiResponseSimilarityResponseSimilarityList;
}(SpeakeasyBase));
export { ApiResponseSimilarityResponseSimilarityList };
// ApiResponseSimilarityResponse
/**
 * Contains the response data if the request was successful.
**/
var ApiResponseSimilarityResponse = /** @class */ (function (_super) {
    __extends(ApiResponseSimilarityResponse, _super);
    function ApiResponseSimilarityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=similarity_list", elemType: ApiResponseSimilarityResponseSimilarityList }),
        __metadata("design:type", Array)
    ], ApiResponseSimilarityResponse.prototype, "similarityList", void 0);
    return ApiResponseSimilarityResponse;
}(SpeakeasyBase));
export { ApiResponseSimilarityResponse };
var ApiResponseSimilarity = /** @class */ (function (_super) {
    __extends(ApiResponseSimilarity, _super);
    function ApiResponseSimilarity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Boolean)
    ], ApiResponseSimilarity.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ApiResponseSimilarity.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", ApiResponseSimilarityResponse)
    ], ApiResponseSimilarity.prototype, "response", void 0);
    return ApiResponseSimilarity;
}(SpeakeasyBase));
export { ApiResponseSimilarity };
