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
var GetV3VideosQueryParams = /** @class */ (function (_super) {
    __extends(GetV3VideosQueryParams, _super);
    function GetV3VideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3VideosQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], GetV3VideosQueryParams.prototype, "ids", void 0);
    return GetV3VideosQueryParams;
}(SpeakeasyBase));
export { GetV3VideosQueryParams };
var GetV3VideosHeaders = /** @class */ (function (_super) {
    __extends(GetV3VideosHeaders, _super);
    function GetV3VideosHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3VideosHeaders.prototype, "acceptLanguage", void 0);
    return GetV3VideosHeaders;
}(SpeakeasyBase));
export { GetV3VideosHeaders };
var GetV3VideosRequest = /** @class */ (function (_super) {
    __extends(GetV3VideosRequest, _super);
    function GetV3VideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosQueryParams)
    ], GetV3VideosRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosHeaders)
    ], GetV3VideosRequest.prototype, "headers", void 0);
    return GetV3VideosRequest;
}(SpeakeasyBase));
export { GetV3VideosRequest };
var GetV3VideosResponse = /** @class */ (function (_super) {
    __extends(GetV3VideosResponse, _super);
    function GetV3VideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3VideosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3VideosResponse.prototype, "statusCode", void 0);
    return GetV3VideosResponse;
}(SpeakeasyBase));
export { GetV3VideosResponse };
