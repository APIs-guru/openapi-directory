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
var SearchQueryParams = /** @class */ (function (_super) {
    __extends(SearchQueryParams, _super);
    function SearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "appendApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_exterior_color" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "baseExteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_interior_color" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "baseInteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "bodySubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "carType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_1_owner" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "carfax1Owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_clean_title" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "carfaxCleanTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_mpg_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "cityMpgRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cylinders" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "cylinders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_type" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "dealerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dedup" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "dedup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_180_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "dom180Range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_active_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "domActiveRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "domRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doors" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "doors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_aspiration" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "engineAspiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "engineBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "engineSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_certified" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "excludeCertified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "exteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "facetSort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "financeDownPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment_per" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "financeDownPaymentPer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_emp" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "financeEmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_apr" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "financeLoanApr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_term" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "financeLoanTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_days" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "firstSeenAtMcDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "firstSeenAtMcRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_days" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "firstSeenAtSourceDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "firstSeenAtSourceRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "firstSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "firstSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highway_mpg_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "highwayMpgRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_finance" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "includeFinance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_lease" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "includeLease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "includeNonVinListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relevant_links" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "includeRelevantLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interior_color" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "interiorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_days" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "lastSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "lastSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], SearchQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_down_payment" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "leaseDownPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_emp" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "leaseEmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_term" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "leaseTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], SearchQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "match", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "milesRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mm" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "mm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msa_code" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "msaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "msrpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodedup" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "nodedup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owned" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "owned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_links" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "photoLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plot" }),
        __metadata("design:type", Boolean)
    ], SearchQueryParams.prototype, "plot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_range" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "priceRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], SearchQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "rangeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], SearchQueryParams.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SearchQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stock_no" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "stockNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vins" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "taxonomyVins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_o" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "trimO", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_r" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "trimR", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "vin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vins" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "vins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "year", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymm" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "ymm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "ymmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], SearchQueryParams.prototype, "zip", void 0);
    return SearchQueryParams;
}(SpeakeasyBase));
export { SearchQueryParams };
var SearchRequest = /** @class */ (function (_super) {
    __extends(SearchRequest, _super);
    function SearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchQueryParams)
    ], SearchRequest.prototype, "queryParams", void 0);
    return SearchRequest;
}(SpeakeasyBase));
export { SearchRequest };
var SearchResponse = /** @class */ (function (_super) {
    __extends(SearchResponse, _super);
    function SearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], SearchResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResponse)
    ], SearchResponse.prototype, "searchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchResponse.prototype, "statusCode", void 0);
    return SearchResponse;
}(SpeakeasyBase));
export { SearchResponse };
