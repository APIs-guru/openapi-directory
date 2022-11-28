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
var GetV3ArtistsVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ArtistsVideosQueryParams, _super);
    function GetV3ArtistsVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artist_name" }),
        __metadata("design:type", String)
    ], GetV3ArtistsVideosQueryParams.prototype, "artistName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3ArtistsVideosQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3ArtistsVideosQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3ArtistsVideosQueryParams.prototype, "pageSize", void 0);
    return GetV3ArtistsVideosQueryParams;
}(SpeakeasyBase));
export { GetV3ArtistsVideosQueryParams };
var GetV3ArtistsVideosHeaders = /** @class */ (function (_super) {
    __extends(GetV3ArtistsVideosHeaders, _super);
    function GetV3ArtistsVideosHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ArtistsVideosHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ArtistsVideosHeaders;
}(SpeakeasyBase));
export { GetV3ArtistsVideosHeaders };
var GetV3ArtistsVideosRequest = /** @class */ (function (_super) {
    __extends(GetV3ArtistsVideosRequest, _super);
    function GetV3ArtistsVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ArtistsVideosQueryParams)
    ], GetV3ArtistsVideosRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ArtistsVideosHeaders)
    ], GetV3ArtistsVideosRequest.prototype, "headers", void 0);
    return GetV3ArtistsVideosRequest;
}(SpeakeasyBase));
export { GetV3ArtistsVideosRequest };
var GetV3ArtistsVideosResponse = /** @class */ (function (_super) {
    __extends(GetV3ArtistsVideosResponse, _super);
    function GetV3ArtistsVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3ArtistsVideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3ArtistsVideosResponse.prototype, "statusCode", void 0);
    return GetV3ArtistsVideosResponse;
}(SpeakeasyBase));
export { GetV3ArtistsVideosResponse };
