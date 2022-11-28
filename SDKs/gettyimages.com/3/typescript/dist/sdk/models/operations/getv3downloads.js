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
var GetV3DownloadsQueryParams = /** @class */ (function (_super) {
    __extends(GetV3DownloadsQueryParams, _super);
    function GetV3DownloadsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company_downloads" }),
        __metadata("design:type", Boolean)
    ], GetV3DownloadsQueryParams.prototype, "companyDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" }),
        __metadata("design:type", Date)
    ], GetV3DownloadsQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" }),
        __metadata("design:type", Date)
    ], GetV3DownloadsQueryParams.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3DownloadsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3DownloadsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_type" }),
        __metadata("design:type", String)
    ], GetV3DownloadsQueryParams.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_time" }),
        __metadata("design:type", Boolean)
    ], GetV3DownloadsQueryParams.prototype, "useTime", void 0);
    return GetV3DownloadsQueryParams;
}(SpeakeasyBase));
export { GetV3DownloadsQueryParams };
var GetV3DownloadsHeaders = /** @class */ (function (_super) {
    __extends(GetV3DownloadsHeaders, _super);
    function GetV3DownloadsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3DownloadsHeaders.prototype, "acceptLanguage", void 0);
    return GetV3DownloadsHeaders;
}(SpeakeasyBase));
export { GetV3DownloadsHeaders };
var GetV3DownloadsRequest = /** @class */ (function (_super) {
    __extends(GetV3DownloadsRequest, _super);
    function GetV3DownloadsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3DownloadsQueryParams)
    ], GetV3DownloadsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3DownloadsHeaders)
    ], GetV3DownloadsRequest.prototype, "headers", void 0);
    return GetV3DownloadsRequest;
}(SpeakeasyBase));
export { GetV3DownloadsRequest };
var GetV3DownloadsResponse = /** @class */ (function (_super) {
    __extends(GetV3DownloadsResponse, _super);
    function GetV3DownloadsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3DownloadsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDownloadsResponse)
    ], GetV3DownloadsResponse.prototype, "getDownloadsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3DownloadsResponse.prototype, "statusCode", void 0);
    return GetV3DownloadsResponse;
}(SpeakeasyBase));
export { GetV3DownloadsResponse };
