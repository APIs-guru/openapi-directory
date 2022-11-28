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
var GetSchedulesScheduleDSubIdPathParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdPathParams, _super);
    function GetSchedulesScheduleDSubIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdPathParams.prototype, "subId", void 0);
    return GetSchedulesScheduleDSubIdPathParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleDSubIdPathParams };
var GetSchedulesScheduleDSubIdQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdQueryParams, _super);
    function GetSchedulesScheduleDSubIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDSubIdQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDSubIdQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDSubIdQueryParams.prototype, "sortNullsLast", void 0);
    return GetSchedulesScheduleDSubIdQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleDSubIdQueryParams };
var GetSchedulesScheduleDSubIdDefaultApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdDefaultApplicationJsonResults, _super);
    function GetSchedulesScheduleDSubIdDefaultApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "actionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "actionCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount_incurred_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "amountIncurredPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canidate_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "canidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "creditorDebtorSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_cycle" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "electionCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nature_of_debt" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "natureOfDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outstanding_balance_beginning_of_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "outstandingBalanceBeginningOfPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outstanding_balance_close_of_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "outstandingBalanceCloseOfPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "paymentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJsonResults.prototype, "transactionId", void 0);
    return GetSchedulesScheduleDSubIdDefaultApplicationJsonResults;
}(SpeakeasyBase));
export { GetSchedulesScheduleDSubIdDefaultApplicationJsonResults };
var GetSchedulesScheduleDSubIdDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdDefaultApplicationJson, _super);
    function GetSchedulesScheduleDSubIdDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleDSubIdDefaultApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJson.prototype, "results", void 0);
    return GetSchedulesScheduleDSubIdDefaultApplicationJson;
}(SpeakeasyBase));
export { GetSchedulesScheduleDSubIdDefaultApplicationJson };
var GetSchedulesScheduleDSubIdRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdRequest, _super);
    function GetSchedulesScheduleDSubIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleDSubIdPathParams)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleDSubIdQueryParams)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleDSubIdRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleDSubIdRequest };
var GetSchedulesScheduleDSubIdResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdResponse, _super);
    function GetSchedulesScheduleDSubIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleDSubIdDefaultApplicationJson)
    ], GetSchedulesScheduleDSubIdResponse.prototype, "getSchedulesScheduleDSubIdDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleDSubIdResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleDSubIdResponse };
