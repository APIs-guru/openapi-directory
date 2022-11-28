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
var TrendingGifsQueryParams = /** @class */ (function (_super) {
    __extends(TrendingGifsQueryParams, _super);
    function TrendingGifsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TrendingGifsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TrendingGifsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", String)
    ], TrendingGifsQueryParams.prototype, "rating", void 0);
    return TrendingGifsQueryParams;
}(SpeakeasyBase));
export { TrendingGifsQueryParams };
var TrendingGifs200ApplicationJson = /** @class */ (function (_super) {
    __extends(TrendingGifs200ApplicationJson, _super);
    function TrendingGifs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Gif }),
        __metadata("design:type", Array)
    ], TrendingGifs200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", shared.Meta)
    ], TrendingGifs200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.Pagination)
    ], TrendingGifs200ApplicationJson.prototype, "pagination", void 0);
    return TrendingGifs200ApplicationJson;
}(SpeakeasyBase));
export { TrendingGifs200ApplicationJson };
var TrendingGifsRequest = /** @class */ (function (_super) {
    __extends(TrendingGifsRequest, _super);
    function TrendingGifsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TrendingGifsQueryParams)
    ], TrendingGifsRequest.prototype, "queryParams", void 0);
    return TrendingGifsRequest;
}(SpeakeasyBase));
export { TrendingGifsRequest };
var TrendingGifsResponse = /** @class */ (function (_super) {
    __extends(TrendingGifsResponse, _super);
    function TrendingGifsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TrendingGifsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TrendingGifsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TrendingGifs200ApplicationJson)
    ], TrendingGifsResponse.prototype, "trendingGifs200ApplicationJsonObject", void 0);
    return TrendingGifsResponse;
}(SpeakeasyBase));
export { TrendingGifsResponse };
