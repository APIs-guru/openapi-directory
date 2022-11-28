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
var GetV3AffiliatesSearchImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetV3AffiliatesSearchImagesQueryParams, _super);
    function GetV3AffiliatesSearchImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" }),
        __metadata("design:type", String)
    ], GetV3AffiliatesSearchImagesQueryParams.prototype, "phrase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=style" }),
        __metadata("design:type", String)
    ], GetV3AffiliatesSearchImagesQueryParams.prototype, "style", void 0);
    return GetV3AffiliatesSearchImagesQueryParams;
}(SpeakeasyBase));
export { GetV3AffiliatesSearchImagesQueryParams };
var GetV3AffiliatesSearchImagesHeaders = /** @class */ (function (_super) {
    __extends(GetV3AffiliatesSearchImagesHeaders, _super);
    function GetV3AffiliatesSearchImagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3AffiliatesSearchImagesHeaders.prototype, "acceptLanguage", void 0);
    return GetV3AffiliatesSearchImagesHeaders;
}(SpeakeasyBase));
export { GetV3AffiliatesSearchImagesHeaders };
var GetV3AffiliatesSearchImagesRequest = /** @class */ (function (_super) {
    __extends(GetV3AffiliatesSearchImagesRequest, _super);
    function GetV3AffiliatesSearchImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3AffiliatesSearchImagesQueryParams)
    ], GetV3AffiliatesSearchImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3AffiliatesSearchImagesHeaders)
    ], GetV3AffiliatesSearchImagesRequest.prototype, "headers", void 0);
    return GetV3AffiliatesSearchImagesRequest;
}(SpeakeasyBase));
export { GetV3AffiliatesSearchImagesRequest };
var GetV3AffiliatesSearchImagesResponse = /** @class */ (function (_super) {
    __extends(GetV3AffiliatesSearchImagesResponse, _super);
    function GetV3AffiliatesSearchImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AffiliateImageSearchResponse)
    ], GetV3AffiliatesSearchImagesResponse.prototype, "affiliateImageSearchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3AffiliatesSearchImagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3AffiliatesSearchImagesResponse.prototype, "statusCode", void 0);
    return GetV3AffiliatesSearchImagesResponse;
}(SpeakeasyBase));
export { GetV3AffiliatesSearchImagesResponse };
