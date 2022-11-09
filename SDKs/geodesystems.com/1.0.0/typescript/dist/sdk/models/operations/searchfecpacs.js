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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var SearchFecPacsQueryParams = /** @class */ (function (_super) {
    __extends(SearchFecPacsQueryParams, _super);
    function SearchFecPacsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchFecPacsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchFecPacsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchFecPacsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchFecPacsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchFecPacsQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchFecPacsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchFecPacsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchFecPacsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchFecPacsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.beginning_cash" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsBeginningCash", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.candidate_loan_repayments" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsCandidateLoanRepayments", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.committee" }),
        __metadata("design:type", String)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsCommittee", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_candidate" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsContributionsFromCandidate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_individuals" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsContributionsFromIndividuals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_other_committees" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsContributionsFromOtherCommittees", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_to_other_committee" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsContributionsToOtherCommittee", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.ending_cash" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsEndingCash", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.loan_repayments" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsLoanRepayments", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.loans_from_candidate" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsLoansFromCandidate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.refends_to_othercommittees" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsRefendsToOthercommittees", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.refunds_to_individuals" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsRefundsToIndividuals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_distributions" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsTotalDistributions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_loans_received" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsTotalLoansReceived", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_receipts" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsTotalReceipts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.trans_from_affiliates" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsTransFromAffiliates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.transfers_to_affiliates" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "searchDbFecPacsTransfersToAffiliates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchFecPacsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchFecPacsQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchFecPacsQueryParams.prototype, "todate", void 0);
    return SearchFecPacsQueryParams;
}(SpeakeasyBase));
export { SearchFecPacsQueryParams };
var SearchFecPacsRequest = /** @class */ (function (_super) {
    __extends(SearchFecPacsRequest, _super);
    function SearchFecPacsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchFecPacsQueryParams)
    ], SearchFecPacsRequest.prototype, "queryParams", void 0);
    return SearchFecPacsRequest;
}(SpeakeasyBase));
export { SearchFecPacsRequest };
var SearchFecPacsResponse = /** @class */ (function (_super) {
    __extends(SearchFecPacsResponse, _super);
    function SearchFecPacsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchFecPacsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchFecPacsResponse.prototype, "statusCode", void 0);
    return SearchFecPacsResponse;
}(SpeakeasyBase));
export { SearchFecPacsResponse };
