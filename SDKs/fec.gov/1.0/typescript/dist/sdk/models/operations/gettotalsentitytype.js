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
export var GetTotalsEntityTypeEntityTypeEnum;
(function (GetTotalsEntityTypeEntityTypeEnum) {
    GetTotalsEntityTypeEntityTypeEnum["Presidential"] = "presidential";
    GetTotalsEntityTypeEntityTypeEnum["Pac"] = "pac";
    GetTotalsEntityTypeEntityTypeEnum["Party"] = "party";
    GetTotalsEntityTypeEntityTypeEnum["PacParty"] = "pac-party";
    GetTotalsEntityTypeEntityTypeEnum["HouseSenate"] = "house-senate";
    GetTotalsEntityTypeEntityTypeEnum["IeOnly"] = "ie-only";
})(GetTotalsEntityTypeEntityTypeEnum || (GetTotalsEntityTypeEntityTypeEnum = {}));
var GetTotalsEntityTypePathParams = /** @class */ (function (_super) {
    __extends(GetTotalsEntityTypePathParams, _super);
    function GetTotalsEntityTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity_type" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypePathParams.prototype, "entityType", void 0);
    return GetTotalsEntityTypePathParams;
}(SpeakeasyBase));
export { GetTotalsEntityTypePathParams };
export var GetTotalsEntityTypeFilingFrequencyEnum;
(function (GetTotalsEntityTypeFilingFrequencyEnum) {
    GetTotalsEntityTypeFilingFrequencyEnum["Unknown"] = "";
    GetTotalsEntityTypeFilingFrequencyEnum["A"] = "A";
    GetTotalsEntityTypeFilingFrequencyEnum["M"] = "M";
    GetTotalsEntityTypeFilingFrequencyEnum["N"] = "N";
    GetTotalsEntityTypeFilingFrequencyEnum["Q"] = "Q";
    GetTotalsEntityTypeFilingFrequencyEnum["T"] = "T";
    GetTotalsEntityTypeFilingFrequencyEnum["W"] = "W";
    GetTotalsEntityTypeFilingFrequencyEnum["MinusA"] = "-A";
    GetTotalsEntityTypeFilingFrequencyEnum["MinusT"] = "-T";
})(GetTotalsEntityTypeFilingFrequencyEnum || (GetTotalsEntityTypeFilingFrequencyEnum = {}));
export var GetTotalsEntityTypeOrganizationTypeEnum;
(function (GetTotalsEntityTypeOrganizationTypeEnum) {
    GetTotalsEntityTypeOrganizationTypeEnum["Unknown"] = "";
    GetTotalsEntityTypeOrganizationTypeEnum["C"] = "C";
    GetTotalsEntityTypeOrganizationTypeEnum["L"] = "L";
    GetTotalsEntityTypeOrganizationTypeEnum["M"] = "M";
    GetTotalsEntityTypeOrganizationTypeEnum["T"] = "T";
    GetTotalsEntityTypeOrganizationTypeEnum["V"] = "V";
    GetTotalsEntityTypeOrganizationTypeEnum["W"] = "W";
})(GetTotalsEntityTypeOrganizationTypeEnum || (GetTotalsEntityTypeOrganizationTypeEnum = {}));
var GetTotalsEntityTypeQueryParams = /** @class */ (function (_super) {
    __extends(GetTotalsEntityTypeQueryParams, _super);
    function GetTotalsEntityTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_designation" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "committeeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_state" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "committeeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_disbursements" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "maxDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_last_cash_on_hand_end_period" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "maxLastCashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_last_debts_owed_by_committee" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "maxLastDebtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipts" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "maxReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_disbursements" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "minDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_last_cash_on_hand_end_period" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "minLastCashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_last_debts_owed_by_committee" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "minLastDebtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipts" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "minReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization_type" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTotalsEntityTypeQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetTotalsEntityTypeQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetTotalsEntityTypeQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetTotalsEntityTypeQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetTotalsEntityTypeQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor_candidate_id" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "sponsorCandidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=treasurer_name" }),
        __metadata("design:type", Array)
    ], GetTotalsEntityTypeQueryParams.prototype, "treasurerName", void 0);
    return GetTotalsEntityTypeQueryParams;
}(SpeakeasyBase));
export { GetTotalsEntityTypeQueryParams };
var GetTotalsEntityTypeRequest = /** @class */ (function (_super) {
    __extends(GetTotalsEntityTypeRequest, _super);
    function GetTotalsEntityTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTotalsEntityTypePathParams)
    ], GetTotalsEntityTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTotalsEntityTypeQueryParams)
    ], GetTotalsEntityTypeRequest.prototype, "queryParams", void 0);
    return GetTotalsEntityTypeRequest;
}(SpeakeasyBase));
export { GetTotalsEntityTypeRequest };
var GetTotalsEntityTypeResponse = /** @class */ (function (_super) {
    __extends(GetTotalsEntityTypeResponse, _super);
    function GetTotalsEntityTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitteeTotalsPage)
    ], GetTotalsEntityTypeResponse.prototype, "committeeTotalsPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTotalsEntityTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTotalsEntityTypeResponse.prototype, "statusCode", void 0);
    return GetTotalsEntityTypeResponse;
}(SpeakeasyBase));
export { GetTotalsEntityTypeResponse };
