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
var GetSchedulesScheduleDQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDQueryParams, _super);
    function GetSchedulesScheduleDQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleDQueryParams.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleDQueryParams.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creditor_debtor_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleDQueryParams.prototype, "creditorDebtorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleDQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount_incurred" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "maxAmountIncurred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount_outstanding_beginning" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "maxAmountOutstandingBeginning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount_outstanding_close" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "maxAmountOutstandingClose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleDQueryParams.prototype, "maxDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_payment_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "maxPaymentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount_incurred" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "minAmountIncurred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount_outstanding_beginning" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "minAmountOutstandingBeginning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount_outstanding_close" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "minAmountOutstandingClose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleDQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_payment_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "minPaymentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nature_of_debt" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDQueryParams.prototype, "natureOfDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDQueryParams.prototype, "sortNullsLast", void 0);
    return GetSchedulesScheduleDQueryParams;
}(SpeakeasyBase));
export { GetSchedulesScheduleDQueryParams };
var GetSchedulesScheduleDDefaultApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDDefaultApplicationJsonResults, _super);
    function GetSchedulesScheduleDDefaultApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "actionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "actionCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount_incurred_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "amountIncurredPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canidate_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "canidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "conduitCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditor_debtor_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "creditorDebtorSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_cycle" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "electionCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nature_of_debt" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "natureOfDebt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outstanding_balance_beginning_of_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "outstandingBalanceBeginningOfPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outstanding_balance_close_of_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "outstandingBalanceCloseOfPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "paymentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDDefaultApplicationJsonResults.prototype, "transactionId", void 0);
    return GetSchedulesScheduleDDefaultApplicationJsonResults;
}(SpeakeasyBase));
export { GetSchedulesScheduleDDefaultApplicationJsonResults };
var GetSchedulesScheduleDDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDDefaultApplicationJson, _super);
    function GetSchedulesScheduleDDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetSchedulesScheduleDDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GetSchedulesScheduleDDefaultApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleDDefaultApplicationJson.prototype, "results", void 0);
    return GetSchedulesScheduleDDefaultApplicationJson;
}(SpeakeasyBase));
export { GetSchedulesScheduleDDefaultApplicationJson };
var GetSchedulesScheduleDRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDRequest, _super);
    function GetSchedulesScheduleDRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleDQueryParams)
    ], GetSchedulesScheduleDRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleDRequest;
}(SpeakeasyBase));
export { GetSchedulesScheduleDRequest };
var GetSchedulesScheduleDResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDResponse, _super);
    function GetSchedulesScheduleDResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesScheduleDDefaultApplicationJson)
    ], GetSchedulesScheduleDResponse.prototype, "getSchedulesScheduleDDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleDResponse;
}(SpeakeasyBase));
export { GetSchedulesScheduleDResponse };
