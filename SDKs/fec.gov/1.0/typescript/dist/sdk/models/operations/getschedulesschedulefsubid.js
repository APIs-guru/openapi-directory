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
var GetSchedulesScheduleFSubIdPathParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFSubIdPathParams, _super);
    function GetSchedulesScheduleFSubIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdPathParams.prototype, "subId", void 0);
    return GetSchedulesScheduleFSubIdPathParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleFSubIdPathParams };
var GetSchedulesScheduleFSubIdQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFSubIdQueryParams, _super);
    function GetSchedulesScheduleFSubIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdQueryParams.prototype, "perPage", void 0);
    return GetSchedulesScheduleFSubIdQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleFSubIdQueryParams };
var GetSchedulesScheduleFSubIdDefaultApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFSubIdDefaultApplicationJsonResults, _super);
    function GetSchedulesScheduleFSubIdDefaultApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "actionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "actionCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregate_general_election_expenditure" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "aggregateGeneralElectionExpenditure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "backReferenceScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidatePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "candidateSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catolog_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "catologCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catolog_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "catologCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_designated_coordinated_expenditure_indicator" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "committeeDesignatedCoordinatedExpenditureIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designated_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "designatedCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designated_committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "designatedCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_cycle" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "electionCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type_desc" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "entityTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "expenditureAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "expenditureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_purpose_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "expenditurePurposeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "expenditureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "expenditureTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "memoCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "payeeFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "payeeLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "payeeMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subordinate_committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "subordinateCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subordinate_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "subordinateCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited_spending_flag" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "unlimitedSpendingFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited_spending_flag_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJsonResults.prototype, "unlimitedSpendingFlagFull", void 0);
    return GetSchedulesScheduleFSubIdDefaultApplicationJsonResults;
}(SpeakeasyBase));
export { GetSchedulesScheduleFSubIdDefaultApplicationJsonResults };
var GetSchedulesScheduleFSubIdDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFSubIdDefaultApplicationJson, _super);
    function GetSchedulesScheduleFSubIdDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleFSubIdDefaultApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleFSubIdDefaultApplicationJson.prototype, "results", void 0);
    return GetSchedulesScheduleFSubIdDefaultApplicationJson;
}(SpeakeasyBase));
export { GetSchedulesScheduleFSubIdDefaultApplicationJson };
var GetSchedulesScheduleFSubIdRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFSubIdRequest, _super);
    function GetSchedulesScheduleFSubIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleFSubIdPathParams)
    ], GetSchedulesScheduleFSubIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleFSubIdQueryParams)
    ], GetSchedulesScheduleFSubIdRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleFSubIdRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleFSubIdRequest };
var GetSchedulesScheduleFSubIdResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleFSubIdResponse, _super);
    function GetSchedulesScheduleFSubIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleFSubIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleFSubIdDefaultApplicationJson)
    ], GetSchedulesScheduleFSubIdResponse.prototype, "getSchedulesScheduleFSubIdDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleFSubIdResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleFSubIdResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleFSubIdResponse };
