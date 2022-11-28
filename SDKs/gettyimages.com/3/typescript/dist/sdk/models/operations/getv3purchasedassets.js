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
var GetV3PurchasedAssetsQueryParams = /** @class */ (function (_super) {
    __extends(GetV3PurchasedAssetsQueryParams, _super);
    function GetV3PurchasedAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company_purchases" }),
        __metadata("design:type", Boolean)
    ], GetV3PurchasedAssetsQueryParams.prototype, "companyPurchases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" }),
        __metadata("design:type", Date)
    ], GetV3PurchasedAssetsQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" }),
        __metadata("design:type", Date)
    ], GetV3PurchasedAssetsQueryParams.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3PurchasedAssetsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3PurchasedAssetsQueryParams.prototype, "pageSize", void 0);
    return GetV3PurchasedAssetsQueryParams;
}(SpeakeasyBase));
export { GetV3PurchasedAssetsQueryParams };
var GetV3PurchasedAssetsHeaders = /** @class */ (function (_super) {
    __extends(GetV3PurchasedAssetsHeaders, _super);
    function GetV3PurchasedAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3PurchasedAssetsHeaders.prototype, "acceptLanguage", void 0);
    return GetV3PurchasedAssetsHeaders;
}(SpeakeasyBase));
export { GetV3PurchasedAssetsHeaders };
var GetV3PurchasedAssetsRequest = /** @class */ (function (_super) {
    __extends(GetV3PurchasedAssetsRequest, _super);
    function GetV3PurchasedAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3PurchasedAssetsQueryParams)
    ], GetV3PurchasedAssetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3PurchasedAssetsHeaders)
    ], GetV3PurchasedAssetsRequest.prototype, "headers", void 0);
    return GetV3PurchasedAssetsRequest;
}(SpeakeasyBase));
export { GetV3PurchasedAssetsRequest };
var GetV3PurchasedAssetsResponse = /** @class */ (function (_super) {
    __extends(GetV3PurchasedAssetsResponse, _super);
    function GetV3PurchasedAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3PurchasedAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviousAssetPurchases)
    ], GetV3PurchasedAssetsResponse.prototype, "previousAssetPurchases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3PurchasedAssetsResponse.prototype, "statusCode", void 0);
    return GetV3PurchasedAssetsResponse;
}(SpeakeasyBase));
export { GetV3PurchasedAssetsResponse };
