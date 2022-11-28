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
var GetSchedulesScheduleCQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCQueryParams, _super);
    function GetSchedulesScheduleCQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleCQueryParams.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleCQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleCQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCQueryParams.prototype, "lastIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loan_source_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleCQueryParams.prototype, "loanSourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_incurred_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleCQueryParams.prototype, "maxIncurredDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_payment_to_date" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCQueryParams.prototype, "maxPaymentToDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCQueryParams.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_incurred_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleCQueryParams.prototype, "minIncurredDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_payment_to_date" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCQueryParams.prototype, "minPaymentToDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleCQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleCQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleCQueryParams.prototype, "sortNullsLast", void 0);
    return GetSchedulesScheduleCQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleCQueryParams };
var GetSchedulesScheduleCDefaultApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCDefaultApplicationJsonResults, _super);
    function GetSchedulesScheduleCDefaultApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "actionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "actionCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateOfficeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidatePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "candidateSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_date_terms" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "dueDateTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "electionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "electionTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "entityTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "fecCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_election_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "fecElectionTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_election_type_year" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "fecElectionTypeYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incurred_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "incurredDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interest_rate_terms" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "interestRateTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_balance" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourcePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_street_1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_street_2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_source_zip" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "loanSourceZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_loan_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "originalLoanAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_to_date" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "paymentToDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personally_funded" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "personallyFunded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_a_line_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "scheduleALineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secured_ind" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "securedInd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCDefaultApplicationJsonResults.prototype, "transactionId", void 0);
    return GetSchedulesScheduleCDefaultApplicationJsonResults;
}(SpeakeasyBase));
export { GetSchedulesScheduleCDefaultApplicationJsonResults };
var GetSchedulesScheduleCDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCDefaultApplicationJson, _super);
    function GetSchedulesScheduleCDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetSchedulesScheduleCDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleCDefaultApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleCDefaultApplicationJson.prototype, "results", void 0);
    return GetSchedulesScheduleCDefaultApplicationJson;
}(SpeakeasyBase));
export { GetSchedulesScheduleCDefaultApplicationJson };
var GetSchedulesScheduleCRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCRequest, _super);
    function GetSchedulesScheduleCRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleCQueryParams)
    ], GetSchedulesScheduleCRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleCRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleCRequest };
var GetSchedulesScheduleCResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCResponse, _super);
    function GetSchedulesScheduleCResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleCDefaultApplicationJson)
    ], GetSchedulesScheduleCResponse.prototype, "getSchedulesScheduleCDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleCResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleCResponse };
