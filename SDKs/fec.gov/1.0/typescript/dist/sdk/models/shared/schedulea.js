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
var ScheduleA = /** @class */ (function (_super) {
    __extends(ScheduleA, _super);
    function ScheduleA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator_desc" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "amendmentIndicatorDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "backReferenceScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "backReferenceTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_full" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateOfficeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidatePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "candidateSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleA.prototype, "committee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_city" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "conduitCommitteeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "conduitCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_state" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "conduitCommitteeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], ScheduleA.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contribution_receipt_amount" }),
        __metadata("design:type", Number)
    ], ScheduleA.prototype, "contributionReceiptAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contribution_receipt_date" }),
        __metadata("design:type", Date)
    ], ScheduleA.prototype, "contributionReceiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor" }),
        __metadata("design:type", CommitteeHistory)
    ], ScheduleA.prototype, "contributor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_aggregate_ytd" }),
        __metadata("design:type", Number)
    ], ScheduleA.prototype, "contributorAggregateYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_city" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_employer" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorEmployer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_first_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_last_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_middle_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_occupation" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorOccupation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_prefix" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_state" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_street_1" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_street_2" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_suffix" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_zip" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "contributorZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=donor_committee_name" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "donorCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "electionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election_type_full" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "electionTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type_desc" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "entityTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_election_type_desc" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "fecElectionTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_election_year" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "fecElectionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], ScheduleA.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "filingForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=increased_limit" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "increasedLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_individual" }),
        __metadata("design:type", Boolean)
    ], ScheduleA.prototype, "isIndividual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number_label" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "lineNumberLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], ScheduleA.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], ScheduleA.prototype, "loadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "memoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_code_full" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "memoCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "memoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoed_subtotal" }),
        __metadata("design:type", Boolean)
    ], ScheduleA.prototype, "memoedSubtotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=national_committee_nonfederal_account" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "nationalCommitteeNonfederalAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_type" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "receiptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_type_desc" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "receiptTypeDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_type_full" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "receiptTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_committee_designation" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "recipientCommitteeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_committee_org_type" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "recipientCommitteeOrgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_committee_type" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "recipientCommitteeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], ScheduleA.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=two_year_transaction_period" }),
        __metadata("design:type", Number)
    ], ScheduleA.prototype, "twoYearTransactionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unused_contbr_id" }),
        __metadata("design:type", String)
    ], ScheduleA.prototype, "unusedContbrId", void 0);
    return ScheduleA;
}(SpeakeasyBase));
export { ScheduleA };
