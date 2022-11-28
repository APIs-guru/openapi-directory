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
var CommitteeReports = /** @class */ (function (_super) {
    __extends(CommitteeReports, _super);
    function CommitteeReports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregate_amount_personal_contributions_general" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "aggregateAmountPersonalContributionsGeneral", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregate_contributions_personal_funds_primary" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "aggregateContributionsPersonalFundsPrimary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all_loans_received_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "allLoansReceivedPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all_loans_received_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "allLoansReceivedYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all_other_loans_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "allOtherLoansPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all_other_loans_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "allOtherLoansYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocated_federal_election_levin_share_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "allocatedFederalElectionLevinSharePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_chain" }),
        __metadata("design:type", Array)
    ], CommitteeReports.prototype, "amendmentChain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "amendmentIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendment_indicator_full" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "amendmentIndicatorFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginning_image_number" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "beginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendar_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "calendarYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_contribution_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "candidateContributionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_contribution_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "candidateContributionYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_calendar_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "cashOnHandBeginningCalendarYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "cashOnHandBeginningPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_close_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "cashOnHandCloseYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "cashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinated_expenditures_by_party_committee_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "coordinatedExpendituresByPartyCommitteePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinated_expenditures_by_party_committee_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "coordinatedExpendituresByPartyCommitteeYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], CommitteeReports.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_start_date" }),
        __metadata("design:type", Date)
    ], CommitteeReports.prototype, "coverageStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv_url" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "csvUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "debtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debts_owed_to_committee" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "debtsOwedToCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_description" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "documentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_image_number" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "endImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "exemptLegalAccountingDisbursementPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "exemptLegalAccountingDisbursementYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expenditure_subject_to_limits" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "expenditureSubjectToLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_file_id" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "fecFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fec_url" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "fecUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contribution_refunds_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "fedCandidateCommitteeContributionRefundsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "fedCandidateCommitteeContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "fedCandidateCommitteeContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_candidate_contribution_refunds_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "fedCandidateContributionRefundsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federal_funds_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "federalFundsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federal_funds_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "federalFundsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundraising_disbursements_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "fundraisingDisbursementsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundraising_disbursements_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "fundraisingDisbursementsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross_receipt_authorized_committee_general" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "grossReceiptAuthorizedCommitteeGeneral", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross_receipt_authorized_committee_primary" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "grossReceiptAuthorizedCommitteePrimary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross_receipt_minus_personal_contribution_general" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "grossReceiptMinusPersonalContributionGeneral", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross_receipt_minus_personal_contributions_primary" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "grossReceiptMinusPersonalContributionsPrimary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independent_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "independentContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independent_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "independentExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independent_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "independentExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_itemized_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "individualItemizedContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_itemized_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "individualItemizedContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_unitemized_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "individualUnitemizedContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_unitemized_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "individualUnitemizedContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_amended" }),
        __metadata("design:type", Boolean)
    ], CommitteeReports.prototype, "isAmended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items_on_hand_liquidated" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "itemsOnHandLiquidated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_candidate_loans_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsCandidateLoansPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_candidate_loans_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsCandidateLoansYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_made_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsMadePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_made_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsMadeYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_other_loans_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsOtherLoansPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_other_loans_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsOtherLoansYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_received_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsReceivedPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_received_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loanRepaymentsReceivedYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_made_by_candidate_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loansMadeByCandidatePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_made_by_candidate_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loansMadeByCandidateYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_made_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loansMadePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_made_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loansMadeYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_received_from_candidate_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loansReceivedFromCandidatePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_received_from_candidate_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "loansReceivedFromCandidateYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=means_filed" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "meansFiled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent" }),
        __metadata("design:type", Boolean)
    ], CommitteeReports.prototype, "mostRecent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=most_recent_file_number" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "mostRecentFileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_contributions_cycle_to_date" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "netContributionsCycleToDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "netContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "netContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_cycle_to_date" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "netOperatingExpendituresCycleToDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "netOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "netOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=non_allocated_fed_election_activity_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "nonAllocatedFedElectionActivityPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=non_allocated_fed_election_activity_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "nonAllocatedFedElectionActivityYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonfed_share_allocated_disbursements_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "nonfedShareAllocatedDisbursementsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_fundraising_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "offsetsToFundraisingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_fundraising_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "offsetsToFundraisingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_legal_accounting_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "offsetsToLegalAccountingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_legal_accounting_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "offsetsToLegalAccountingYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "offsetsToOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "offsetsToOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "operatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "operatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_disbursements_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherDisbursementsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_disbursements_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherDisbursementsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_fed_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherFedOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_fed_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherFedOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_fed_receipts_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherFedReceiptsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_fed_receipts_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherFedReceiptsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_loans_received_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherLoansReceivedPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_loans_received_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherLoansReceivedYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_political_committee_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherPoliticalCommitteeContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_political_committee_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherPoliticalCommitteeContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_receipts_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherReceiptsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_receipts_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "otherReceiptsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=political_party_committee_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "politicalPartyCommitteeContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=political_party_committee_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "politicalPartyCommitteeContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_file_number" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "previousFileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipt_date" }),
        __metadata("design:type", Date)
    ], CommitteeReports.prototype, "receiptDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_individual_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "refundedIndividualContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_individual_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "refundedIndividualContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_other_political_committee_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "refundedOtherPoliticalCommitteeContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_other_political_committee_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "refundedOtherPoliticalCommitteeContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_political_party_committee_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "refundedPoliticalPartyCommitteeContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_political_party_committee_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "refundedPoliticalPartyCommitteeContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunds_total_contributions_col_total_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "refundsTotalContributionsColTotalYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_loans_made_by_candidate_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "repaymentsLoansMadeByCandidatePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_loans_made_candidate_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "repaymentsLoansMadeCandidateYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_other_loans_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "repaymentsOtherLoansPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_other_loans_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "repaymentsOtherLoansYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_form" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "reportForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type_full" }),
        __metadata("design:type", String)
    ], CommitteeReports.prototype, "reportTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_activity_nonfed_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "sharedFedActivityNonfedYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_activity_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "sharedFedActivityPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_activity_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "sharedFedActivityYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "sharedFedOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "sharedFedOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_nonfed_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "sharedNonfedOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_nonfed_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "sharedNonfedOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtotal_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "subtotalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtotal_summary_page_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "subtotalSummaryPagePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtotal_summary_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "subtotalSummaryPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtotal_summary_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "subtotalSummaryYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_contribution_refunds_col_total_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalContributionRefundsColTotalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_contribution_refunds_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalContributionRefundsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_contribution_refunds_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalContributionRefundsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_contributions_column_total_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalContributionsColumnTotalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_disbursements_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalDisbursementsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_disbursements_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalDisbursementsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_disbursements_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedDisbursementsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_disbursements_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedDisbursementsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_election_activity_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedElectionActivityPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_election_activity_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedElectionActivityYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_receipts_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedReceiptsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_fed_receipts_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalFedReceiptsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_individual_contributions_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalIndividualContributionsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_individual_contributions_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalIndividualContributionsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_loan_repayments_made_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalLoanRepaymentsMadePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_loan_repayments_made_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalLoanRepaymentsMadeYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_loans_received_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalLoansReceivedPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_loans_received_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalLoansReceivedYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_nonfed_transfers_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalNonfedTransfersPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_nonfed_transfers_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalNonfedTransfersYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_offsets_to_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalOffsetsToOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_offsets_to_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalOffsetsToOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_operating_expenditures_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalOperatingExpendituresPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_operating_expenditures_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalOperatingExpendituresYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_receipts_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalReceiptsPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_receipts_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalReceiptsYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "totalYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committee_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromAffiliatedCommitteePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committee_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromAffiliatedCommitteeYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_party_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromAffiliatedPartyPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_party_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromAffiliatedPartyYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_account_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromNonfedAccountPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_account_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromNonfedAccountYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_levin_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromNonfedLevinPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_levin_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromNonfedLevinYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_other_authorized_committee_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromOtherAuthorizedCommitteePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_other_authorized_committee_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersFromOtherAuthorizedCommitteeYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_to_affiliated_committee_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersToAffiliatedCommitteePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_to_affilitated_committees_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersToAffilitatedCommitteesYtd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committee_period" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersToOtherAuthorizedCommitteePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committee_ytd" }),
        __metadata("design:type", Number)
    ], CommitteeReports.prototype, "transfersToOtherAuthorizedCommitteeYtd", void 0);
    return CommitteeReports;
}(SpeakeasyBase));
export { CommitteeReports };
