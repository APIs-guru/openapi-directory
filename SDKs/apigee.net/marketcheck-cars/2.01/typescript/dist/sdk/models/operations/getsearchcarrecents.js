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
var GetSearchCarRecentsQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchCarRecentsQueryParams, _super);
    function GetSearchCarRecentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "appendApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_exterior_color" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "baseExteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_interior_color" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "baseInteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "bodySubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "bodyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "carType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_1_owner" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "carfax1Owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_clean_title" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "carfaxCleanTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_mpg_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "cityMpgRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cylinders" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "cylinders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_id" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "dealerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_name" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "dealerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_type" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "dealerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealership_group_name" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "dealershipGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dedup" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "dedup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_180_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "dom180Range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_active_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "domActiveRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "domRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doors" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "doors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "drivetrain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_aspiration" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "engineAspiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "engineBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "engineSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_certified" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "excludeCertified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expired" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "exteriorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "facetSort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "financeDownPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment_per" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "financeDownPaymentPer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_emp" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "financeEmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_apr" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "financeLoanApr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_term" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "financeLoanTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_days" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "firstSeenAtMcDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_mc_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "firstSeenAtMcRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_days" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "firstSeenAtSourceDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_at_source_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "firstSeenAtSourceRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_days" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "firstSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "firstSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "fuelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highway_mpg_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "highwayMpgRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_finance" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "includeFinance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_lease" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "includeLease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "includeNonVinListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relevant_links" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "includeRelevantLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interior_color" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "interiorColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_days" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "lastSeenDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "lastSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], GetSearchCarRecentsQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_down_payment" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "leaseDownPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_emp" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "leaseEmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_term" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "leaseTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], GetSearchCarRecentsQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "match", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "milesRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msa_code" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "msaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "msrpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodedup" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "nodedup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owned" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "owned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_links" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "photoLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plot" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "plot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_range" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "priceRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchCarRecentsQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "rangeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetSearchCarRecentsQueryParams.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sold" }),
        __metadata("design:type", Boolean)
    ], GetSearchCarRecentsQueryParams.prototype, "sold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetSearchCarRecentsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stock_no" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "stockNo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vins" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "taxonomyVins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "transmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_o" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "trimO", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim_r" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "trimR", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "vin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vins" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "vins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "year", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "ymmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetSearchCarRecentsQueryParams.prototype, "zip", void 0);
    return GetSearchCarRecentsQueryParams;
}(SpeakeasyBase));
export { GetSearchCarRecentsQueryParams };
var GetSearchCarRecentsRequest = /** @class */ (function (_super) {
    __extends(GetSearchCarRecentsRequest, _super);
    function GetSearchCarRecentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchCarRecentsQueryParams)
    ], GetSearchCarRecentsRequest.prototype, "queryParams", void 0);
    return GetSearchCarRecentsRequest;
}(SpeakeasyBase));
export { GetSearchCarRecentsRequest };
var GetSearchCarRecentsResponse = /** @class */ (function (_super) {
    __extends(GetSearchCarRecentsResponse, _super);
    function GetSearchCarRecentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchCarRecentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSearchCarRecentsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResponse)
    ], GetSearchCarRecentsResponse.prototype, "searchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchCarRecentsResponse.prototype, "statusCode", void 0);
    return GetSearchCarRecentsResponse;
}(SpeakeasyBase));
export { GetSearchCarRecentsResponse };
