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
var GetV3ArtistsImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ArtistsImagesQueryParams, _super);
    function GetV3ArtistsImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=artist_name" }),
        __metadata("design:type", String)
    ], GetV3ArtistsImagesQueryParams.prototype, "artistName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3ArtistsImagesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3ArtistsImagesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3ArtistsImagesQueryParams.prototype, "pageSize", void 0);
    return GetV3ArtistsImagesQueryParams;
}(SpeakeasyBase));
export { GetV3ArtistsImagesQueryParams };
var GetV3ArtistsImagesHeaders = /** @class */ (function (_super) {
    __extends(GetV3ArtistsImagesHeaders, _super);
    function GetV3ArtistsImagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ArtistsImagesHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ArtistsImagesHeaders;
}(SpeakeasyBase));
export { GetV3ArtistsImagesHeaders };
var GetV3ArtistsImagesRequest = /** @class */ (function (_super) {
    __extends(GetV3ArtistsImagesRequest, _super);
    function GetV3ArtistsImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ArtistsImagesQueryParams)
    ], GetV3ArtistsImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ArtistsImagesHeaders)
    ], GetV3ArtistsImagesRequest.prototype, "headers", void 0);
    return GetV3ArtistsImagesRequest;
}(SpeakeasyBase));
export { GetV3ArtistsImagesRequest };
var GetV3ArtistsImagesResponse = /** @class */ (function (_super) {
    __extends(GetV3ArtistsImagesResponse, _super);
    function GetV3ArtistsImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3ArtistsImagesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3ArtistsImagesResponse.prototype, "statusCode", void 0);
    return GetV3ArtistsImagesResponse;
}(SpeakeasyBase));
export { GetV3ArtistsImagesResponse };
