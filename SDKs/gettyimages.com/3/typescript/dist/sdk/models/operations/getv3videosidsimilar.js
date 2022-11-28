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
var GetV3VideosIdSimilarPathParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSimilarPathParams, _super);
    function GetV3VideosIdSimilarPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3VideosIdSimilarPathParams.prototype, "id", void 0);
    return GetV3VideosIdSimilarPathParams;
}(SpeakeasyBase));
export { GetV3VideosIdSimilarPathParams };
var GetV3VideosIdSimilarQueryParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSimilarQueryParams, _super);
    function GetV3VideosIdSimilarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3VideosIdSimilarQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3VideosIdSimilarQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3VideosIdSimilarQueryParams.prototype, "pageSize", void 0);
    return GetV3VideosIdSimilarQueryParams;
}(SpeakeasyBase));
export { GetV3VideosIdSimilarQueryParams };
var GetV3VideosIdSimilarHeaders = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSimilarHeaders, _super);
    function GetV3VideosIdSimilarHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3VideosIdSimilarHeaders.prototype, "acceptLanguage", void 0);
    return GetV3VideosIdSimilarHeaders;
}(SpeakeasyBase));
export { GetV3VideosIdSimilarHeaders };
var GetV3VideosIdSimilarRequest = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSimilarRequest, _super);
    function GetV3VideosIdSimilarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosIdSimilarPathParams)
    ], GetV3VideosIdSimilarRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosIdSimilarQueryParams)
    ], GetV3VideosIdSimilarRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosIdSimilarHeaders)
    ], GetV3VideosIdSimilarRequest.prototype, "headers", void 0);
    return GetV3VideosIdSimilarRequest;
}(SpeakeasyBase));
export { GetV3VideosIdSimilarRequest };
var GetV3VideosIdSimilarResponse = /** @class */ (function (_super) {
    __extends(GetV3VideosIdSimilarResponse, _super);
    function GetV3VideosIdSimilarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3VideosIdSimilarResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3VideosIdSimilarResponse.prototype, "statusCode", void 0);
    return GetV3VideosIdSimilarResponse;
}(SpeakeasyBase));
export { GetV3VideosIdSimilarResponse };
