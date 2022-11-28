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
var GetSearchMotorcycleActiveQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchMotorcycleActiveQueryParams, _super);
    function GetSearchMotorcycleActiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cylinders" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "cylinders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_id" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "dealerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "facetSort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "firstSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "firstSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "inventoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_days" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "lastSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "lastSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles_range" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "milesRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msa_code" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "msaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp_range" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "msrpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_range" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "priceRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "rangeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_text" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "searchText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stock_no" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "stockNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vin" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "taxonomyVin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "vin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "year", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveQueryParams.prototype, "zip", void 0);
    return GetSearchMotorcycleActiveQueryParams;
}(SpeakeasyBase));
export { GetSearchMotorcycleActiveQueryParams };
var GetSearchMotorcycleActiveRequest = /** @class */ (function (_super) {
    __extends(GetSearchMotorcycleActiveRequest, _super);
    function GetSearchMotorcycleActiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchMotorcycleActiveQueryParams)
    ], GetSearchMotorcycleActiveRequest.prototype, "queryParams", void 0);
    return GetSearchMotorcycleActiveRequest;
}(SpeakeasyBase));
export { GetSearchMotorcycleActiveRequest };
var GetSearchMotorcycleActiveResponse = /** @class */ (function (_super) {
    __extends(GetSearchMotorcycleActiveResponse, _super);
    function GetSearchMotorcycleActiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchMotorcycleActiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSearchMotorcycleActiveResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MotorcycleSearchResponse)
    ], GetSearchMotorcycleActiveResponse.prototype, "motorcycleSearchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchMotorcycleActiveResponse.prototype, "statusCode", void 0);
    return GetSearchMotorcycleActiveResponse;
}(SpeakeasyBase));
export { GetSearchMotorcycleActiveResponse };
