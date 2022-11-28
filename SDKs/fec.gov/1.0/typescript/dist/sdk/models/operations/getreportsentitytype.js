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
export var GetReportsEntityTypeEntityTypeEnum;
(function (GetReportsEntityTypeEntityTypeEnum) {
    GetReportsEntityTypeEntityTypeEnum["Presidential"] = "presidential";
    GetReportsEntityTypeEntityTypeEnum["PacParty"] = "pac-party";
    GetReportsEntityTypeEntityTypeEnum["HouseSenate"] = "house-senate";
    GetReportsEntityTypeEntityTypeEnum["IeOnly"] = "ie-only";
})(GetReportsEntityTypeEntityTypeEnum || (GetReportsEntityTypeEntityTypeEnum = {}));
var GetReportsEntityTypePathParams = /** @class */ (function (_super) {
    __extends(GetReportsEntityTypePathParams, _super);
    function GetReportsEntityTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity_type" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypePathParams.prototype, "entityType", void 0);
    return GetReportsEntityTypePathParams;
}(SpeakeasyBase));
export { GetReportsEntityTypePathParams };
export var GetReportsEntityTypeAmendmentIndicatorEnum;
(function (GetReportsEntityTypeAmendmentIndicatorEnum) {
    GetReportsEntityTypeAmendmentIndicatorEnum["Unknown"] = "";
    GetReportsEntityTypeAmendmentIndicatorEnum["N"] = "N";
    GetReportsEntityTypeAmendmentIndicatorEnum["A"] = "A";
    GetReportsEntityTypeAmendmentIndicatorEnum["T"] = "T";
    GetReportsEntityTypeAmendmentIndicatorEnum["C"] = "C";
    GetReportsEntityTypeAmendmentIndicatorEnum["M"] = "M";
    GetReportsEntityTypeAmendmentIndicatorEnum["S"] = "S";
})(GetReportsEntityTypeAmendmentIndicatorEnum || (GetReportsEntityTypeAmendmentIndicatorEnum = {}));
export var GetReportsEntityTypeFilerTypeEnum;
(function (GetReportsEntityTypeFilerTypeEnum) {
    GetReportsEntityTypeFilerTypeEnum["EFile"] = "e-file";
    GetReportsEntityTypeFilerTypeEnum["Paper"] = "paper";
})(GetReportsEntityTypeFilerTypeEnum || (GetReportsEntityTypeFilerTypeEnum = {}));
var GetReportsEntityTypeQueryParams = /** @class */ (function (_super) {
    __extends(GetReportsEntityTypeQueryParams, _super);
    function GetReportsEntityTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filer_type" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "filerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_amended" }),
        __metadata("design:type", Boolean)
    ], GetReportsEntityTypeQueryParams.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_cash_on_hand_end_period_amount" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "maxCashOnHandEndPeriodAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_debts_owed_expenditures" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "maxDebtsOwedExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_disbursements_amount" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "maxDisbursementsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_independent_expenditures" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "maxIndependentExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_party_coordinated_expenditures" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "maxPartyCoordinatedExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" }),
        __metadata("design:type", Date)
    ], GetReportsEntityTypeQueryParams.prototype, "maxReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipts_amount" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "maxReceiptsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_total_contributions" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "maxTotalContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_cash_on_hand_end_period_amount" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "minCashOnHandEndPeriodAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_debts_owed_amount" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "minDebtsOwedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_disbursements_amount" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "minDisbursementsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_independent_expenditures" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "minIndependentExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_party_coordinated_expenditures" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "minPartyCoordinatedExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" }),
        __metadata("design:type", Date)
    ], GetReportsEntityTypeQueryParams.prototype, "minReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipts_amount" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "minReceiptsAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_total_contributions" }),
        __metadata("design:type", String)
    ], GetReportsEntityTypeQueryParams.prototype, "minTotalContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" }),
        __metadata("design:type", Boolean)
    ], GetReportsEntityTypeQueryParams.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetReportsEntityTypeQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetReportsEntityTypeQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetReportsEntityTypeQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetReportsEntityTypeQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetReportsEntityTypeQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Array)
    ], GetReportsEntityTypeQueryParams.prototype, "year", void 0);
    return GetReportsEntityTypeQueryParams;
}(SpeakeasyBase));
export { GetReportsEntityTypeQueryParams };
var GetReportsEntityTypeRequest = /** @class */ (function (_super) {
    __extends(GetReportsEntityTypeRequest, _super);
    function GetReportsEntityTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportsEntityTypePathParams)
    ], GetReportsEntityTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportsEntityTypeQueryParams)
    ], GetReportsEntityTypeRequest.prototype, "queryParams", void 0);
    return GetReportsEntityTypeRequest;
}(SpeakeasyBase));
export { GetReportsEntityTypeRequest };
var GetReportsEntityTypeResponse = /** @class */ (function (_super) {
    __extends(GetReportsEntityTypeResponse, _super);
    function GetReportsEntityTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeReportsPage)
    ], GetReportsEntityTypeResponse.prototype, "committeeReportsPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportsEntityTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportsEntityTypeResponse.prototype, "statusCode", void 0);
    return GetReportsEntityTypeResponse;
}(SpeakeasyBase));
export { GetReportsEntityTypeResponse };
