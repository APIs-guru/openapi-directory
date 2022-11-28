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
var GetV3VideosIdPathParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdPathParams, _super);
    function GetV3VideosIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3VideosIdPathParams.prototype, "id", void 0);
    return GetV3VideosIdPathParams;
}(SpeakeasyBase));
export { GetV3VideosIdPathParams };
var GetV3VideosIdQueryParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdQueryParams, _super);
    function GetV3VideosIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3VideosIdQueryParams.prototype, "fields", void 0);
    return GetV3VideosIdQueryParams;
}(SpeakeasyBase));
export { GetV3VideosIdQueryParams };
var GetV3VideosIdHeaders = /** @class */ (function (_super) {
    __extends(GetV3VideosIdHeaders, _super);
    function GetV3VideosIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3VideosIdHeaders.prototype, "acceptLanguage", void 0);
    return GetV3VideosIdHeaders;
}(SpeakeasyBase));
export { GetV3VideosIdHeaders };
var GetV3VideosIdRequest = /** @class */ (function (_super) {
    __extends(GetV3VideosIdRequest, _super);
    function GetV3VideosIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosIdPathParams)
    ], GetV3VideosIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosIdQueryParams)
    ], GetV3VideosIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3VideosIdHeaders)
    ], GetV3VideosIdRequest.prototype, "headers", void 0);
    return GetV3VideosIdRequest;
}(SpeakeasyBase));
export { GetV3VideosIdRequest };
var GetV3VideosIdResponse = /** @class */ (function (_super) {
    __extends(GetV3VideosIdResponse, _super);
    function GetV3VideosIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3VideosIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3VideosIdResponse.prototype, "statusCode", void 0);
    return GetV3VideosIdResponse;
}(SpeakeasyBase));
export { GetV3VideosIdResponse };
