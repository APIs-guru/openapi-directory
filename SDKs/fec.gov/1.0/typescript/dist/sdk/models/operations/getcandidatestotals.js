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
export var GetCandidatesTotalsOfficeEnum;
(function (GetCandidatesTotalsOfficeEnum) {
    GetCandidatesTotalsOfficeEnum["Unknown"] = "";
    GetCandidatesTotalsOfficeEnum["H"] = "H";
    GetCandidatesTotalsOfficeEnum["S"] = "S";
    GetCandidatesTotalsOfficeEnum["P"] = "P";
})(GetCandidatesTotalsOfficeEnum || (GetCandidatesTotalsOfficeEnum = {}));
var GetCandidatesTotalsQueryParams = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsQueryParams, _super);
    function GetCandidatesTotalsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsQueryParams.prototype, "electionFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "electionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsQueryParams.prototype, "federalFundsFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_raised_funds" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsQueryParams.prototype, "hasRaisedFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsQueryParams.prototype, "isActiveCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_cash_on_hand_end_period" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "maxCashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_debts_owed_by_committee" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "maxDebtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_disbursements" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "maxDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipts" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "maxReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_cash_on_hand_end_period" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "minCashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_debts_owed_by_committee" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "minDebtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_disbursements" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "minDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipts" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "minReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCandidatesTotalsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCandidatesTotalsQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetCandidatesTotalsQueryParams.prototype, "state", void 0);
    return GetCandidatesTotalsQueryParams;
}(SpeakeasyBase));
export { GetCandidatesTotalsQueryParams };
var GetCandidatesTotalsRequest = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsRequest, _super);
    function GetCandidatesTotalsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCandidatesTotalsQueryParams)
    ], GetCandidatesTotalsRequest.prototype, "queryParams", void 0);
    return GetCandidatesTotalsRequest;
}(SpeakeasyBase));
export { GetCandidatesTotalsRequest };
var GetCandidatesTotalsResponse = /** @class */ (function (_super) {
    __extends(GetCandidatesTotalsResponse, _super);
    function GetCandidatesTotalsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CandidateHistoryTotalPage)
    ], GetCandidatesTotalsResponse.prototype, "candidateHistoryTotalPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCandidatesTotalsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCandidatesTotalsResponse.prototype, "statusCode", void 0);
    return GetCandidatesTotalsResponse;
}(SpeakeasyBase));
export { GetCandidatesTotalsResponse };
