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
var GetDealersHeavyEquipmentQueryParams = /** @class */ (function (_super) {
    __extends(GetDealersHeavyEquipmentQueryParams, _super);
    function GetDealersHeavyEquipmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_type" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "dealerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_url" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "inventoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_count_range" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "listingCountRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" }),
        __metadata("design:type", Boolean)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "rangeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentQueryParams.prototype, "zip", void 0);
    return GetDealersHeavyEquipmentQueryParams;
}(SpeakeasyBase));
export { GetDealersHeavyEquipmentQueryParams };
var GetDealersHeavyEquipmentRequest = /** @class */ (function (_super) {
    __extends(GetDealersHeavyEquipmentRequest, _super);
    function GetDealersHeavyEquipmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDealersHeavyEquipmentQueryParams)
    ], GetDealersHeavyEquipmentRequest.prototype, "queryParams", void 0);
    return GetDealersHeavyEquipmentRequest;
}(SpeakeasyBase));
export { GetDealersHeavyEquipmentRequest };
var GetDealersHeavyEquipmentResponse = /** @class */ (function (_super) {
    __extends(GetDealersHeavyEquipmentResponse, _super);
    function GetDealersHeavyEquipmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDealersHeavyEquipmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DealersResponse)
    ], GetDealersHeavyEquipmentResponse.prototype, "dealersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetDealersHeavyEquipmentResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDealersHeavyEquipmentResponse.prototype, "statusCode", void 0);
    return GetDealersHeavyEquipmentResponse;
}(SpeakeasyBase));
export { GetDealersHeavyEquipmentResponse };
