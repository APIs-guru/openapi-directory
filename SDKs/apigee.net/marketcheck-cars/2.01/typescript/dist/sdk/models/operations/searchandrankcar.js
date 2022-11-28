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
var SearchAndRankCarQueryParams = /** @class */ (function (_super) {
    __extends(SearchAndRankCarQueryParams, _super);
    function SearchAndRankCarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "appendApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_exterior_color" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "baseExteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_interior_color" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "baseInteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "bodySubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "carType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_1_owner" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "carfax1Owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_clean_title" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "carfaxCleanTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_mpg_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "cityMpgRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cylinders" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "cylinders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_type" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "dealerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dedup" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "dedup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_180_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "dom180Range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_active_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "domActiveRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "domRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doors" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "doors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_aspiration" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "engineAspiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "engineBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "engineSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_certified" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "excludeCertified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "exteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "facetSort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "financeDownPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment_per" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "financeDownPaymentPer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_emp" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "financeEmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_apr" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "financeLoanApr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_term" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "financeLoanTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_days" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "firstSeenAtMcDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "firstSeenAtMcRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_days" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "firstSeenAtSourceDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "firstSeenAtSourceRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "firstSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "firstSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highway_mpg_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "highwayMpgRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_finance" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "includeFinance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_lease" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "includeLease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "includeNonVinListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interior_color" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "interiorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_type" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "inventoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_days" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "lastSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "lastSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], SearchAndRankCarQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_down_payment" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "leaseDownPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_emp" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "leaseEmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_term" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "leaseTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], SearchAndRankCarQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "match", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "milesRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msa_code" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "msaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "msrpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodedup" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "nodedup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owned" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "owned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchAndRankCarQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_links" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "photoLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plot" }),
        __metadata("design:type", Boolean)
    ], SearchAndRankCarQueryParams.prototype, "plot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_range" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "priceRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], SearchAndRankCarQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "rangeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], SearchAndRankCarQueryParams.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SearchAndRankCarQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stock_no" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "stockNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vins" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "taxonomyVins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_o" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "trimO", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_r" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "trimR", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "vin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vins" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "vins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "year", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "ymmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], SearchAndRankCarQueryParams.prototype, "zip", void 0);
    return SearchAndRankCarQueryParams;
}(SpeakeasyBase));
export { SearchAndRankCarQueryParams };
var SearchAndRankCarRequest = /** @class */ (function (_super) {
    __extends(SearchAndRankCarRequest, _super);
    function SearchAndRankCarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchAndRankCarQueryParams)
    ], SearchAndRankCarRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CarRankRequest)
    ], SearchAndRankCarRequest.prototype, "request", void 0);
    return SearchAndRankCarRequest;
}(SpeakeasyBase));
export { SearchAndRankCarRequest };
var SearchAndRankCarResponse = /** @class */ (function (_super) {
    __extends(SearchAndRankCarResponse, _super);
    function SearchAndRankCarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CarRankResponse)
    ], SearchAndRankCarResponse.prototype, "carRankResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchAndRankCarResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], SearchAndRankCarResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchAndRankCarResponse.prototype, "statusCode", void 0);
    return SearchAndRankCarResponse;
}(SpeakeasyBase));
export { SearchAndRankCarResponse };
