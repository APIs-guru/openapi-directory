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
import * as shared from "../shared";
var GetV3ImagesIdSameSeriesPathParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSameSeriesPathParams, _super);
    function GetV3ImagesIdSameSeriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdSameSeriesPathParams.prototype, "id", void 0);
    return GetV3ImagesIdSameSeriesPathParams;
}(SpeakeasyBase));
export { GetV3ImagesIdSameSeriesPathParams };
var GetV3ImagesIdSameSeriesQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSameSeriesQueryParams, _super);
    function GetV3ImagesIdSameSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3ImagesIdSameSeriesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3ImagesIdSameSeriesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3ImagesIdSameSeriesQueryParams.prototype, "pageSize", void 0);
    return GetV3ImagesIdSameSeriesQueryParams;
}(SpeakeasyBase));
export { GetV3ImagesIdSameSeriesQueryParams };
var GetV3ImagesIdSameSeriesHeaders = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSameSeriesHeaders, _super);
    function GetV3ImagesIdSameSeriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdSameSeriesHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ImagesIdSameSeriesHeaders;
}(SpeakeasyBase));
export { GetV3ImagesIdSameSeriesHeaders };
var GetV3ImagesIdSameSeriesRequest = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSameSeriesRequest, _super);
    function GetV3ImagesIdSameSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ImagesIdSameSeriesPathParams)
    ], GetV3ImagesIdSameSeriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ImagesIdSameSeriesQueryParams)
    ], GetV3ImagesIdSameSeriesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ImagesIdSameSeriesHeaders)
    ], GetV3ImagesIdSameSeriesRequest.prototype, "headers", void 0);
    return GetV3ImagesIdSameSeriesRequest;
}(SpeakeasyBase));
export { GetV3ImagesIdSameSeriesRequest };
var GetV3ImagesIdSameSeriesResponse = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSameSeriesResponse, _super);
    function GetV3ImagesIdSameSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3ImagesIdSameSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImageSearchItemSearchResults)
    ], GetV3ImagesIdSameSeriesResponse.prototype, "imageSearchItemSearchResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3ImagesIdSameSeriesResponse.prototype, "statusCode", void 0);
    return GetV3ImagesIdSameSeriesResponse;
}(SpeakeasyBase));
export { GetV3ImagesIdSameSeriesResponse };
