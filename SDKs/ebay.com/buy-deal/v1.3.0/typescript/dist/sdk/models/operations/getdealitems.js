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
var GetDealItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetDealItemsQueryParams, _super);
    function GetDealItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category_ids" }),
        __metadata("design:type", String)
    ], GetDealItemsQueryParams.prototype, "categoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commissionable" }),
        __metadata("design:type", String)
    ], GetDealItemsQueryParams.prototype, "commissionable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delivery_country" }),
        __metadata("design:type", String)
    ], GetDealItemsQueryParams.prototype, "deliveryCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetDealItemsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetDealItemsQueryParams.prototype, "offset", void 0);
    return GetDealItemsQueryParams;
}(SpeakeasyBase));
export { GetDealItemsQueryParams };
var GetDealItemsHeaders = /** @class */ (function (_super) {
    __extends(GetDealItemsHeaders, _super);
    function GetDealItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], GetDealItemsHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return GetDealItemsHeaders;
}(SpeakeasyBase));
export { GetDealItemsHeaders };
var GetDealItemsSecurity = /** @class */ (function (_super) {
    __extends(GetDealItemsSecurity, _super);
    function GetDealItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetDealItemsSecurity.prototype, "apiAuth", void 0);
    return GetDealItemsSecurity;
}(SpeakeasyBase));
export { GetDealItemsSecurity };
var GetDealItemsRequest = /** @class */ (function (_super) {
    __extends(GetDealItemsRequest, _super);
    function GetDealItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDealItemsQueryParams)
    ], GetDealItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDealItemsHeaders)
    ], GetDealItemsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDealItemsSecurity)
    ], GetDealItemsRequest.prototype, "security", void 0);
    return GetDealItemsRequest;
}(SpeakeasyBase));
export { GetDealItemsRequest };
var GetDealItemsResponse = /** @class */ (function (_super) {
    __extends(GetDealItemsResponse, _super);
    function GetDealItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDealItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DealItemSearchResponse)
    ], GetDealItemsResponse.prototype, "dealItemSearchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDealItemsResponse.prototype, "statusCode", void 0);
    return GetDealItemsResponse;
}(SpeakeasyBase));
export { GetDealItemsResponse };
