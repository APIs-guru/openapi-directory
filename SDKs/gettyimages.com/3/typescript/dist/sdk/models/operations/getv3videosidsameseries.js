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
var GetV3VideosIdSameSeriesPathParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSameSeriesPathParams, _super);
    function GetV3VideosIdSameSeriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3VideosIdSameSeriesPathParams.prototype, "id", void 0);
    return GetV3VideosIdSameSeriesPathParams;
}(SpeakeasyBase));
export { GetV3VideosIdSameSeriesPathParams };
var GetV3VideosIdSameSeriesQueryParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSameSeriesQueryParams, _super);
    function GetV3VideosIdSameSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3VideosIdSameSeriesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3VideosIdSameSeriesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3VideosIdSameSeriesQueryParams.prototype, "pageSize", void 0);
    return GetV3VideosIdSameSeriesQueryParams;
}(SpeakeasyBase));
export { GetV3VideosIdSameSeriesQueryParams };
var GetV3VideosIdSameSeriesHeaders = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSameSeriesHeaders, _super);
    function GetV3VideosIdSameSeriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3VideosIdSameSeriesHeaders.prototype, "acceptLanguage", void 0);
    return GetV3VideosIdSameSeriesHeaders;
}(SpeakeasyBase));
export { GetV3VideosIdSameSeriesHeaders };
var GetV3VideosIdSameSeriesRequest = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSameSeriesRequest, _super);
    function GetV3VideosIdSameSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3VideosIdSameSeriesPathParams)
    ], GetV3VideosIdSameSeriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3VideosIdSameSeriesQueryParams)
    ], GetV3VideosIdSameSeriesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3VideosIdSameSeriesHeaders)
    ], GetV3VideosIdSameSeriesRequest.prototype, "headers", void 0);
    return GetV3VideosIdSameSeriesRequest;
}(SpeakeasyBase));
export { GetV3VideosIdSameSeriesRequest };
var GetV3VideosIdSameSeriesResponse = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSameSeriesResponse, _super);
    function GetV3VideosIdSameSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3VideosIdSameSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3VideosIdSameSeriesResponse.prototype, "statusCode", void 0);
    return GetV3VideosIdSameSeriesResponse;
}(SpeakeasyBase));
export { GetV3VideosIdSameSeriesResponse };
