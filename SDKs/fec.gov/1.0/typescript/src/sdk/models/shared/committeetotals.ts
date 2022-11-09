import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommitteeTotals extends SpeakeasyBase {
  @Metadata({ data: "json, name=all_loans_received" })
  allLoansReceived?: number;

  @Metadata({ data: "json, name=all_other_loans" })
  allOtherLoans?: number;

  @Metadata({ data: "json, name=allocated_federal_election_levin_share" })
  allocatedFederalElectionLevinShare?: number;

  @Metadata({ data: "json, name=candidate_contribution" })
  candidateContribution?: number;

  @Metadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @Metadata({ data: "json, name=committee_designation" })
  committeeDesignation?: string;

  @Metadata({ data: "json, name=committee_designation_full" })
  committeeDesignationFull?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=committee_state" })
  committeeState?: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @Metadata({ data: "json, name=contribution_refunds" })
  contributionRefunds?: number;

  @Metadata({ data: "json, name=contributions" })
  contributions?: number;

  @Metadata({ data: "json, name=contributions_ie_and_party_expenditures_made_percent" })
  contributionsIeAndPartyExpendituresMadePercent?: number;

  @Metadata({ data: "json, name=convention_exp" })
  conventionExp?: number;

  @Metadata({ data: "json, name=coordinated_expenditures_by_party_committee" })
  coordinatedExpendituresByPartyCommittee?: number;

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @Metadata({ data: "json, name=cycle" })
  cycle: number;

  @Metadata({ data: "json, name=disbursements" })
  disbursements?: number;

  @Metadata({ data: "json, name=exempt_legal_accounting_disbursement" })
  exemptLegalAccountingDisbursement?: number;

  @Metadata({ data: "json, name=exp_prior_years_subject_limits" })
  expPriorYearsSubjectLimits?: number;

  @Metadata({ data: "json, name=exp_subject_limits" })
  expSubjectLimits?: number;

  @Metadata({ data: "json, name=fed_candidate_committee_contributions" })
  fedCandidateCommitteeContributions?: number;

  @Metadata({ data: "json, name=fed_candidate_contribution_refunds" })
  fedCandidateContributionRefunds?: number;

  @Metadata({ data: "json, name=fed_disbursements" })
  fedDisbursements?: number;

  @Metadata({ data: "json, name=fed_election_activity" })
  fedElectionActivity?: number;

  @Metadata({ data: "json, name=fed_operating_expenditures" })
  fedOperatingExpenditures?: number;

  @Metadata({ data: "json, name=fed_receipts" })
  fedReceipts?: number;

  @Metadata({ data: "json, name=federal_funds" })
  federalFunds?: number;

  @Metadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @Metadata({ data: "json, name=filing_frequency_full" })
  filingFrequencyFull?: string;

  @Metadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @Metadata({ data: "json, name=fundraising_disbursements" })
  fundraisingDisbursements?: number;

  @Metadata({ data: "json, name=independent_expenditures" })
  independentExpenditures?: number;

  @Metadata({ data: "json, name=individual_contributions" })
  individualContributions?: number;

  @Metadata({ data: "json, name=individual_contributions_percent" })
  individualContributionsPercent?: number;

  @Metadata({ data: "json, name=individual_itemized_contributions" })
  individualItemizedContributions?: number;

  @Metadata({ data: "json, name=individual_unitemized_contributions" })
  individualUnitemizedContributions?: number;

  @Metadata({ data: "json, name=itemized_convention_exp" })
  itemizedConventionExp?: number;

  @Metadata({ data: "json, name=itemized_other_disb" })
  itemizedOtherDisb?: number;

  @Metadata({ data: "json, name=itemized_other_income" })
  itemizedOtherIncome?: number;

  @Metadata({ data: "json, name=itemized_other_refunds" })
  itemizedOtherRefunds?: number;

  @Metadata({ data: "json, name=itemized_refunds_relating_convention_exp" })
  itemizedRefundsRelatingConventionExp?: number;

  @Metadata({ data: "json, name=last_beginning_image_number" })
  lastBeginningImageNumber?: string;

  @Metadata({ data: "json, name=last_cash_on_hand_end_period" })
  lastCashOnHandEndPeriod?: number;

  @Metadata({ data: "json, name=last_debts_owed_by_committee" })
  lastDebtsOwedByCommittee?: number;

  @Metadata({ data: "json, name=last_debts_owed_to_committee" })
  lastDebtsOwedToCommittee?: number;

  @Metadata({ data: "json, name=last_report_type_full" })
  lastReportTypeFull?: string;

  @Metadata({ data: "json, name=last_report_year" })
  lastReportYear?: number;

  @Metadata({ data: "json, name=loan_repayments" })
  loanRepayments?: number;

  @Metadata({ data: "json, name=loan_repayments_candidate_loans" })
  loanRepaymentsCandidateLoans?: number;

  @Metadata({ data: "json, name=loan_repayments_made" })
  loanRepaymentsMade?: number;

  @Metadata({ data: "json, name=loan_repayments_other_loans" })
  loanRepaymentsOtherLoans?: number;

  @Metadata({ data: "json, name=loan_repayments_received" })
  loanRepaymentsReceived?: number;

  @Metadata({ data: "json, name=loans" })
  loans?: number;

  @Metadata({ data: "json, name=loans_and_loan_repayments_made" })
  loansAndLoanRepaymentsMade?: number;

  @Metadata({ data: "json, name=loans_and_loan_repayments_received" })
  loansAndLoanRepaymentsReceived?: number;

  @Metadata({ data: "json, name=loans_made" })
  loansMade?: number;

  @Metadata({ data: "json, name=loans_made_by_candidate" })
  loansMadeByCandidate?: number;

  @Metadata({ data: "json, name=loans_received" })
  loansReceived?: number;

  @Metadata({ data: "json, name=loans_received_from_candidate" })
  loansReceivedFromCandidate?: number;

  @Metadata({ data: "json, name=net_contributions" })
  netContributions?: number;

  @Metadata({ data: "json, name=net_operating_expenditures" })
  netOperatingExpenditures?: number;

  @Metadata({ data: "json, name=non_allocated_fed_election_activity" })
  nonAllocatedFedElectionActivity?: number;

  @Metadata({ data: "json, name=offsets_to_fundraising_expenditures" })
  offsetsToFundraisingExpenditures?: number;

  @Metadata({ data: "json, name=offsets_to_legal_accounting" })
  offsetsToLegalAccounting?: number;

  @Metadata({ data: "json, name=offsets_to_operating_expenditures" })
  offsetsToOperatingExpenditures?: number;

  @Metadata({ data: "json, name=operating_expenditures" })
  operatingExpenditures?: number;

  @Metadata({ data: "json, name=operating_expenditures_percent" })
  operatingExpendituresPercent?: number;

  @Metadata({ data: "json, name=organization_type" })
  organizationType?: string;

  @Metadata({ data: "json, name=organization_type_full" })
  organizationTypeFull?: string;

  @Metadata({ data: "json, name=other_disbursements" })
  otherDisbursements?: number;

  @Metadata({ data: "json, name=other_fed_operating_expenditures" })
  otherFedOperatingExpenditures?: number;

  @Metadata({ data: "json, name=other_fed_receipts" })
  otherFedReceipts?: number;

  @Metadata({ data: "json, name=other_loans_received" })
  otherLoansReceived?: number;

  @Metadata({ data: "json, name=other_political_committee_contributions" })
  otherPoliticalCommitteeContributions?: number;

  @Metadata({ data: "json, name=other_receipts" })
  otherReceipts?: number;

  @Metadata({ data: "json, name=other_refunds" })
  otherRefunds?: number;

  @Metadata({ data: "json, name=party_and_other_committee_contributions_percent" })
  partyAndOtherCommitteeContributionsPercent?: number;

  @Metadata({ data: "json, name=party_full" })
  partyFull?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=political_party_committee_contributions" })
  politicalPartyCommitteeContributions?: number;

  @Metadata({ data: "json, name=receipts" })
  receipts?: number;

  @Metadata({ data: "json, name=refunded_individual_contributions" })
  refundedIndividualContributions?: number;

  @Metadata({ data: "json, name=refunded_other_political_committee_contributions" })
  refundedOtherPoliticalCommitteeContributions?: number;

  @Metadata({ data: "json, name=refunded_political_party_committee_contributions" })
  refundedPoliticalPartyCommitteeContributions?: number;

  @Metadata({ data: "json, name=refunds_relating_convention_exp" })
  refundsRelatingConventionExp?: number;

  @Metadata({ data: "json, name=repayments_loans_made_by_candidate" })
  repaymentsLoansMadeByCandidate?: number;

  @Metadata({ data: "json, name=repayments_other_loans" })
  repaymentsOtherLoans?: number;

  @Metadata({ data: "json, name=report_form" })
  reportForm?: string;

  @Metadata({ data: "json, name=shared_fed_activity" })
  sharedFedActivity?: number;

  @Metadata({ data: "json, name=shared_fed_activity_nonfed" })
  sharedFedActivityNonfed?: number;

  @Metadata({ data: "json, name=shared_fed_operating_expenditures" })
  sharedFedOperatingExpenditures?: number;

  @Metadata({ data: "json, name=shared_nonfed_operating_expenditures" })
  sharedNonfedOperatingExpenditures?: number;

  @Metadata({ data: "json, name=total_exp_subject_limits" })
  totalExpSubjectLimits?: number;

  @Metadata({ data: "json, name=total_independent_contributions" })
  totalIndependentContributions?: number;

  @Metadata({ data: "json, name=total_independent_expenditures" })
  totalIndependentExpenditures?: number;

  @Metadata({ data: "json, name=total_offsets_to_operating_expenditures" })
  totalOffsetsToOperatingExpenditures?: number;

  @Metadata({ data: "json, name=total_transfers" })
  totalTransfers?: number;

  @Metadata({ data: "json, name=transaction_coverage_date" })
  transactionCoverageDate?: Date;

  @Metadata({ data: "json, name=transfers_from_affiliated_committee" })
  transfersFromAffiliatedCommittee?: number;

  @Metadata({ data: "json, name=transfers_from_affiliated_party" })
  transfersFromAffiliatedParty?: number;

  @Metadata({ data: "json, name=transfers_from_nonfed_account" })
  transfersFromNonfedAccount?: number;

  @Metadata({ data: "json, name=transfers_from_nonfed_levin" })
  transfersFromNonfedLevin?: number;

  @Metadata({ data: "json, name=transfers_from_other_authorized_committee" })
  transfersFromOtherAuthorizedCommittee?: number;

  @Metadata({ data: "json, name=transfers_to_affiliated_committee" })
  transfersToAffiliatedCommittee?: number;

  @Metadata({ data: "json, name=transfers_to_other_authorized_committee" })
  transfersToOtherAuthorizedCommittee?: number;

  @Metadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @Metadata({ data: "json, name=unitemized_convention_exp" })
  unitemizedConventionExp?: number;

  @Metadata({ data: "json, name=unitemized_other_disb" })
  unitemizedOtherDisb?: number;

  @Metadata({ data: "json, name=unitemized_other_income" })
  unitemizedOtherIncome?: number;

  @Metadata({ data: "json, name=unitemized_other_refunds" })
  unitemizedOtherRefunds?: number;

  @Metadata({ data: "json, name=unitemized_refunds_relating_convention_exp" })
  unitemizedRefundsRelatingConventionExp?: number;
}
