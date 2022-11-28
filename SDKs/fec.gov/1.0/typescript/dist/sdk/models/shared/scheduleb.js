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
import { CommitteeHistory } from "./committeehistory";
var ScheduleB = /** @class */ (function (_super) {
    __extends(ScheduleB, _super);
    function ScheduleB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator_desc" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "amendmentIndicatorDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "backReferenceScheduleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beneficiary_committee_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "beneficiaryCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_description" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateOfficeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidatePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "candidateSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_code" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "categoryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_code_full" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "categoryCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comm_dt" }),
        __metadata("design:type", Date)
    ], ScheduleB.prototype, "commDt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleB.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], ScheduleB.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_amount" }),
        __metadata("design:type", Number)
    ], ScheduleB.prototype, "disbursementAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_date" }),
        __metadata("design:type", Date)
    ], ScheduleB.prototype, "disbursementDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_description" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "disbursementDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_purpose_category" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "disbursementPurposeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_type" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "disbursementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursement_type_description" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "disbursementTypeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "electionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type_full" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "electionTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type_desc" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "entityTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_election_type_desc" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "fecElectionTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_election_year" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "fecElectionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], ScheduleB.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number_label" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "lineNumberLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], ScheduleB.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], ScheduleB.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code_full" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "memoCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoed_subtotal" }),
        __metadata("design:type", Boolean)
    ], ScheduleB.prototype, "memoedSubtotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=national_committee_nonfederal_account" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "nationalCommitteeNonfederalAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_employer" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "payeeEmployer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_first_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "payeeFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_last_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "payeeLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "payeeMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_occupation" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "payeeOccupation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_prefix" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "payeePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_suffix" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "payeeSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_city" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "recipientCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_committee" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleB.prototype, "recipientCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_committee_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "recipientCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_name" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "recipientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_state" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "recipientState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_zip" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "recipientZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref_disp_excess_flg" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "refDispExcessFlg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], ScheduleB.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=semi_annual_bundled_refund" }),
        __metadata("design:type", Number)
    ], ScheduleB.prototype, "semiAnnualBundledRefund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spender_committee_designation" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "spenderCommitteeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spender_committee_org_type" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "spenderCommitteeOrgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spender_committee_type" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "spenderCommitteeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=two_year_transaction_period" }),
        __metadata("design:type", Number)
    ], ScheduleB.prototype, "twoYearTransactionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unused_recipient_committee_id" }),
        __metadata("design:type", String)
    ], ScheduleB.prototype, "unusedRecipientCommitteeId", void 0);
    return ScheduleB;
}(SpeakeasyBase));
export { ScheduleB };
