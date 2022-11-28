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
var CommitteeTotals = /** @class */ (function (_super) {
    __extends(CommitteeTotals, _super);
    function CommitteeTotals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all_loans_received" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "allLoansReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all_other_loans" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "allOtherLoans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocated_federal_election_levin_share" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "allocatedFederalElectionLevinShare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_contribution" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "candidateContribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "cashOnHandBeginningPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_designation" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "committeeDesignation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_designation_full" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "committeeDesignationFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_state" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "committeeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type_full" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "committeeTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contribution_refunds" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "contributionRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "contributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributions_ie_and_party_expenditures_made_percent" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "contributionsIeAndPartyExpendituresMadePercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=convention_exp" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "conventionExp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinated_expenditures_by_party_committee" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "coordinatedExpendituresByPartyCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_end_date" }),
        __metadata("design:type", Date)
    ], CommitteeTotals.prototype, "coverageEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverage_start_date" }),
        __metadata("design:type", Date)
    ], CommitteeTotals.prototype, "coverageStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disbursements" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "disbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "exemptLegalAccountingDisbursement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp_prior_years_subject_limits" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "expPriorYearsSubjectLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp_subject_limits" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "expSubjectLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "fedCandidateCommitteeContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_candidate_contribution_refunds" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "fedCandidateContributionRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_disbursements" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "fedDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_election_activity" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "fedElectionActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "fedOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fed_receipts" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "fedReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federal_funds" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "federalFunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_frequency" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_frequency_full" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "filingFrequencyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_file_date" }),
        __metadata("design:type", Date)
    ], CommitteeTotals.prototype, "firstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundraising_disbursements" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "fundraisingDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=independent_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "independentExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "individualContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_contributions_percent" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "individualContributionsPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_itemized_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "individualItemizedContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual_unitemized_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "individualUnitemizedContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemized_convention_exp" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "itemizedConventionExp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemized_other_disb" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "itemizedOtherDisb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemized_other_income" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "itemizedOtherIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemized_other_refunds" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "itemizedOtherRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemized_refunds_relating_convention_exp" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "itemizedRefundsRelatingConventionExp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_beginning_image_number" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "lastBeginningImageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_cash_on_hand_end_period" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "lastCashOnHandEndPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_debts_owed_by_committee" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "lastDebtsOwedByCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_debts_owed_to_committee" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "lastDebtsOwedToCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_report_type_full" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "lastReportTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_report_year" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "lastReportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loanRepayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_candidate_loans" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loanRepaymentsCandidateLoans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_made" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loanRepaymentsMade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_other_loans" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loanRepaymentsOtherLoans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loan_repayments_received" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loanRepaymentsReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_and_loan_repayments_made" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loansAndLoanRepaymentsMade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_and_loan_repayments_received" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loansAndLoanRepaymentsReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_made" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loansMade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_made_by_candidate" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loansMadeByCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_received" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loansReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loans_received_from_candidate" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "loansReceivedFromCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "netContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net_operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "netOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=non_allocated_fed_election_activity" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "nonAllocatedFedElectionActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_fundraising_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "offsetsToFundraisingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_legal_accounting" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "offsetsToLegalAccounting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "offsetsToOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "operatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operating_expenditures_percent" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "operatingExpendituresPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type_full" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "organizationTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_disbursements" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "otherDisbursements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_fed_operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "otherFedOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_fed_receipts" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "otherFedReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_loans_received" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "otherLoansReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_political_committee_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "otherPoliticalCommitteeContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_receipts" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "otherReceipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_refunds" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "otherRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_and_other_committee_contributions_percent" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "partyAndOtherCommitteeContributionsPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=political_party_committee_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "politicalPartyCommitteeContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receipts" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "receipts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_individual_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "refundedIndividualContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_other_political_committee_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "refundedOtherPoliticalCommitteeContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded_political_party_committee_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "refundedPoliticalPartyCommitteeContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunds_relating_convention_exp" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "refundsRelatingConventionExp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_loans_made_by_candidate" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "repaymentsLoansMadeByCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repayments_other_loans" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "repaymentsOtherLoans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_form" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "reportForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_activity" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "sharedFedActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_activity_nonfed" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "sharedFedActivityNonfed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_fed_operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "sharedFedOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared_nonfed_operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "sharedNonfedOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_exp_subject_limits" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "totalExpSubjectLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_independent_contributions" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "totalIndependentContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_independent_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "totalIndependentExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_offsets_to_operating_expenditures" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "totalOffsetsToOperatingExpenditures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_transfers" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "totalTransfers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_coverage_date" }),
        __metadata("design:type", Date)
    ], CommitteeTotals.prototype, "transactionCoverageDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committee" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "transfersFromAffiliatedCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_party" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "transfersFromAffiliatedParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_account" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "transfersFromNonfedAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_levin" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "transfersFromNonfedLevin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_from_other_authorized_committee" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "transfersFromOtherAuthorizedCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_to_affiliated_committee" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "transfersToAffiliatedCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committee" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "transfersToOtherAuthorizedCommittee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name" }),
        __metadata("design:type", String)
    ], CommitteeTotals.prototype, "treasurerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitemized_convention_exp" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "unitemizedConventionExp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitemized_other_disb" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "unitemizedOtherDisb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitemized_other_income" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "unitemizedOtherIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitemized_other_refunds" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "unitemizedOtherRefunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitemized_refunds_relating_convention_exp" }),
        __metadata("design:type", Number)
    ], CommitteeTotals.prototype, "unitemizedRefundsRelatingConventionExp", void 0);
    return CommitteeTotals;
}(SpeakeasyBase));
export { CommitteeTotals };
