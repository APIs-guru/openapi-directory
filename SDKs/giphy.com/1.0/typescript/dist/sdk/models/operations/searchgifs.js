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
var SearchGifsQueryParams = /** @class */ (function (_super) {
    __extends(SearchGifsQueryParams, _super);
    function SearchGifsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SearchGifsQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SearchGifsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], SearchGifsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchGifsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", String)
    ], SearchGifsQueryParams.prototype, "rating", void 0);
    return SearchGifsQueryParams;
}(SpeakeasyBase));
export { SearchGifsQueryParams };
var SearchGifs200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchGifs200ApplicationJson, _super);
    function SearchGifs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Gif }),
        __metadata("design:type", Array)
    ], SearchGifs200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", shared.Meta)
    ], SearchGifs200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.Pagination)
    ], SearchGifs200ApplicationJson.prototype, "pagination", void 0);
    return SearchGifs200ApplicationJson;
}(SpeakeasyBase));
export { SearchGifs200ApplicationJson };
var SearchGifsRequest = /** @class */ (function (_super) {
    __extends(SearchGifsRequest, _super);
    function SearchGifsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchGifsQueryParams)
    ], SearchGifsRequest.prototype, "queryParams", void 0);
    return SearchGifsRequest;
}(SpeakeasyBase));
export { SearchGifsRequest };
var SearchGifsResponse = /** @class */ (function (_super) {
    __extends(SearchGifsResponse, _super);
    function SearchGifsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchGifsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchGifsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchGifs200ApplicationJson)
    ], SearchGifsResponse.prototype, "searchGifs200ApplicationJsonObject", void 0);
    return SearchGifsResponse;
}(SpeakeasyBase));
export { SearchGifsResponse };
