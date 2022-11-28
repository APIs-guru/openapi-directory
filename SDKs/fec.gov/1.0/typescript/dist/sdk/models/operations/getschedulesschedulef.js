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
var GetSchedulesScheduleFQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFQueryParams, _super);
    function GetSchedulesScheduleFQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleFQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleFQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleFQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleFQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleFQueryParams.prototype, "maxDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFQueryParams.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleFQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payee_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleFQueryParams.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleFQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleFQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleFQueryParams.prototype, "sortNullsLast", void 0);
    return GetSchedulesScheduleFQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleFQueryParams };
var GetSchedulesScheduleFDefaultApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFDefaultApplicationJsonResults, _super);
    function GetSchedulesScheduleFDefaultApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "actionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "actionCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregate_general_election_expenditure" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "aggregateGeneralElectionExpenditure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "backReferenceScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateOfficeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidatePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "candidateSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catolog_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "catologCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catolog_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "catologCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_designated_coordinated_expenditure_indicator" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "committeeDesignatedCoordinatedExpenditureIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "conduitCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designated_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "designatedCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designated_committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "designatedCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_cycle" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "electionCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type_desc" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "entityTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "expenditureAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "expenditureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_purpose_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "expenditurePurposeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "expenditureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "expenditureTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "memoCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "payeeFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "payeeLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "payeeMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subordinate_committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "subordinateCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subordinate_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "subordinateCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited_spending_flag" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "unlimitedSpendingFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited_spending_flag_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFDefaultApplicationJsonResults.prototype, "unlimitedSpendingFlagFull", void 0);
    return GetSchedulesScheduleFDefaultApplicationJsonResults;
}(SpeakeasyBase));
export { GetSchedulesScheduleFDefaultApplicationJsonResults };
var GetSchedulesScheduleFDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFDefaultApplicationJson, _super);
    function GetSchedulesScheduleFDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetSchedulesScheduleFDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleFDefaultApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleFDefaultApplicationJson.prototype, "results", void 0);
    return GetSchedulesScheduleFDefaultApplicationJson;
}(SpeakeasyBase));
export { GetSchedulesScheduleFDefaultApplicationJson };
var GetSchedulesScheduleFRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFRequest, _super);
    function GetSchedulesScheduleFRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleFQueryParams)
    ], GetSchedulesScheduleFRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleFRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleFRequest };
var GetSchedulesScheduleFResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFResponse, _super);
    function GetSchedulesScheduleFResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleFDefaultApplicationJson)
    ], GetSchedulesScheduleFResponse.prototype, "getSchedulesScheduleFDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleFResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleFResponse };
