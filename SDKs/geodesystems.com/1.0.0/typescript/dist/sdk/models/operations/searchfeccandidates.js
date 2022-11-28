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
var SearchFeccandidatesQueryParams = /** @class */ (function (_super) {
    __extends(SearchFeccandidatesQueryParams, _super);
    function SearchFeccandidatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchFeccandidatesQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchFeccandidatesQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchFeccandidatesQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchFeccandidatesQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchFeccandidatesQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.beginning_cash" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesBeginningCash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.candidate_loan_repayments" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesCandidateLoanRepayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.committee_refunds" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesCommitteeRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_candidate" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesContributionsFromCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_other_committees" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesContributionsFromOtherCommittees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_party_committees" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesContributionsFromPartyCommittees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.coverage_end_date" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesCoverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.debts_owed_by" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesDebtsOwedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.district" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.ending_cash" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesEndingCash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.gender" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesGender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.individual_refunds" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesIndividualRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.loans_from_candidates" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesLoansFromCandidates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.name" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.other_loan_repayments" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesOtherLoanRepayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.other_loans" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesOtherLoans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.party" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.state" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_disbursements" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesTotalDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_indivual_contributions" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesTotalIndivualContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_receipts" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesTotalReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.transfers_from_committees" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesTransfersFromCommittees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.transfers_to_committees" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "searchDbFeccandidatesTransfersToCommittees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchFeccandidatesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchFeccandidatesQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchFeccandidatesQueryParams.prototype, "todate", void 0);
    return SearchFeccandidatesQueryParams;
}(SpeakeasyBase));
export { SearchFeccandidatesQueryParams };
var SearchFeccandidatesRequest = /** @class */ (function (_super) {
    __extends(SearchFeccandidatesRequest, _super);
    function SearchFeccandidatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchFeccandidatesQueryParams)
    ], SearchFeccandidatesRequest.prototype, "queryParams", void 0);
    return SearchFeccandidatesRequest;
}(SpeakeasyBase));
export { SearchFeccandidatesRequest };
var SearchFeccandidatesResponse = /** @class */ (function (_super) {
    __extends(SearchFeccandidatesResponse, _super);
    function SearchFeccandidatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchFeccandidatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchFeccandidatesResponse.prototype, "statusCode", void 0);
    return SearchFeccandidatesResponse;
}(SpeakeasyBase));
export { SearchFeccandidatesResponse };
