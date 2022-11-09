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
var GetV3ImagesIdSimilarPathParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSimilarPathParams, _super);
    function GetV3ImagesIdSimilarPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdSimilarPathParams.prototype, "id", void 0);
    return GetV3ImagesIdSimilarPathParams;
}(SpeakeasyBase));
export { GetV3ImagesIdSimilarPathParams };
var GetV3ImagesIdSimilarQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSimilarQueryParams, _super);
    function GetV3ImagesIdSimilarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3ImagesIdSimilarQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3ImagesIdSimilarQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3ImagesIdSimilarQueryParams.prototype, "pageSize", void 0);
    return GetV3ImagesIdSimilarQueryParams;
}(SpeakeasyBase));
export { GetV3ImagesIdSimilarQueryParams };
var GetV3ImagesIdSimilarHeaders = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSimilarHeaders, _super);
    function GetV3ImagesIdSimilarHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdSimilarHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ImagesIdSimilarHeaders;
}(SpeakeasyBase));
export { GetV3ImagesIdSimilarHeaders };
var GetV3ImagesIdSimilarRequest = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSimilarRequest, _super);
    function GetV3ImagesIdSimilarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ImagesIdSimilarPathParams)
    ], GetV3ImagesIdSimilarRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ImagesIdSimilarQueryParams)
    ], GetV3ImagesIdSimilarRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ImagesIdSimilarHeaders)
    ], GetV3ImagesIdSimilarRequest.prototype, "headers", void 0);
    return GetV3ImagesIdSimilarRequest;
}(SpeakeasyBase));
export { GetV3ImagesIdSimilarRequest };
var GetV3ImagesIdSimilarResponse = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdSimilarResponse, _super);
    function GetV3ImagesIdSimilarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3ImagesIdSimilarResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImageSearchItemSearchResults)
    ], GetV3ImagesIdSimilarResponse.prototype, "imageSearchItemSearchResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3ImagesIdSimilarResponse.prototype, "statusCode", void 0);
    return GetV3ImagesIdSimilarResponse;
}(SpeakeasyBase));
export { GetV3ImagesIdSimilarResponse };
