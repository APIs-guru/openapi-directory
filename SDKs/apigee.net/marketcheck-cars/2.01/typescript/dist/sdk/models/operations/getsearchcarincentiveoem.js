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
export var GetSearchCarIncentiveOemOfferTypeEnum;
(function (GetSearchCarIncentiveOemOfferTypeEnum) {
    GetSearchCarIncentiveOemOfferTypeEnum["Lease"] = "lease";
    GetSearchCarIncentiveOemOfferTypeEnum["Finance"] = "finance";
    GetSearchCarIncentiveOemOfferTypeEnum["Cash"] = "cash";
})(GetSearchCarIncentiveOemOfferTypeEnum || (GetSearchCarIncentiveOemOfferTypeEnum = {}));
var GetSearchCarIncentiveOemQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchCarIncentiveOemQueryParams, _super);
    function GetSearchCarIncentiveOemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acquisition_fee" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "acquisitionFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apr" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "apr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashback_amount" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "cashbackAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashback_target_group" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "cashbackTargetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_contribution" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "dealerContribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disposition_fee" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "dispositionFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=down_payment" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "downPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=due_at_signing" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "dueAtSigning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_sort" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "facetSort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_seen_range" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "firstSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gross_capitalised_cost" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "grossCapitalisedCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_seen_range" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "lastSeenRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_end_purchase_option" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "leaseEndPurchaseOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "make", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mileage_charge" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "mileageCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mileage_charge_limit" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "mileageChargeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthly" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "monthly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monthly_per_thousand" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "monthlyPerThousand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "msrp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=net_capitalised_cost" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "netCapitalisedCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offer_type" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "offerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range_facets" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "rangeFacets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_text" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "searchText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=security_deposit" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "securityDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=total_monthly_payment" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "totalMonthlyPayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "year", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemQueryParams.prototype, "zip", void 0);
    return GetSearchCarIncentiveOemQueryParams;
}(SpeakeasyBase));
export { GetSearchCarIncentiveOemQueryParams };
var GetSearchCarIncentiveOemRequest = /** @class */ (function (_super) {
    __extends(GetSearchCarIncentiveOemRequest, _super);
    function GetSearchCarIncentiveOemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchCarIncentiveOemQueryParams)
    ], GetSearchCarIncentiveOemRequest.prototype, "queryParams", void 0);
    return GetSearchCarIncentiveOemRequest;
}(SpeakeasyBase));
export { GetSearchCarIncentiveOemRequest };
var GetSearchCarIncentiveOemResponse = /** @class */ (function (_super) {
    __extends(GetSearchCarIncentiveOemResponse, _super);
    function GetSearchCarIncentiveOemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchCarIncentiveOemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSearchCarIncentiveOemResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResponse)
    ], GetSearchCarIncentiveOemResponse.prototype, "searchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchCarIncentiveOemResponse.prototype, "statusCode", void 0);
    return GetSearchCarIncentiveOemResponse;
}(SpeakeasyBase));
export { GetSearchCarIncentiveOemResponse };
