import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommitteeTotals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all_loans_received" })
  allLoansReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=all_other_loans" })
  allOtherLoans?: number;

  @SpeakeasyMetadata({ data: "json, name=allocated_federal_election_levin_share" })
  allocatedFederalElectionLevinShare?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_contribution" })
  candidateContribution?: number;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=committee_designation" })
  committeeDesignation?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_designation_full" })
  committeeDesignationFull?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_state" })
  committeeState?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=contribution_refunds" })
  contributionRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=contributions" })
  contributions?: number;

  @SpeakeasyMetadata({ data: "json, name=contributions_ie_and_party_expenditures_made_percent" })
  contributionsIeAndPartyExpendituresMadePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=convention_exp" })
  conventionExp?: number;

  @SpeakeasyMetadata({ data: "json, name=coordinated_expenditures_by_party_committee" })
  coordinatedExpendituresByPartyCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "json, name=disbursements" })
  disbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement" })
  exemptLegalAccountingDisbursement?: number;

  @SpeakeasyMetadata({ data: "json, name=exp_prior_years_subject_limits" })
  expPriorYearsSubjectLimits?: number;

  @SpeakeasyMetadata({ data: "json, name=exp_subject_limits" })
  expSubjectLimits?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contributions" })
  fedCandidateCommitteeContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_candidate_contribution_refunds" })
  fedCandidateContributionRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_disbursements" })
  fedDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_election_activity" })
  fedElectionActivity?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_operating_expenditures" })
  fedOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_receipts" })
  fedReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=federal_funds" })
  federalFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=filing_frequency_full" })
  filingFrequencyFull?: string;

  @SpeakeasyMetadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=fundraising_disbursements" })
  fundraisingDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=independent_expenditures" })
  independentExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_contributions" })
  individualContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_contributions_percent" })
  individualContributionsPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_itemized_contributions" })
  individualItemizedContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_unitemized_contributions" })
  individualUnitemizedContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=itemized_convention_exp" })
  itemizedConventionExp?: number;

  @SpeakeasyMetadata({ data: "json, name=itemized_other_disb" })
  itemizedOtherDisb?: number;

  @SpeakeasyMetadata({ data: "json, name=itemized_other_income" })
  itemizedOtherIncome?: number;

  @SpeakeasyMetadata({ data: "json, name=itemized_other_refunds" })
  itemizedOtherRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=itemized_refunds_relating_convention_exp" })
  itemizedRefundsRelatingConventionExp?: number;

  @SpeakeasyMetadata({ data: "json, name=last_beginning_image_number" })
  lastBeginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=last_cash_on_hand_end_period" })
  lastCashOnHandEndPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=last_debts_owed_by_committee" })
  lastDebtsOwedByCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=last_debts_owed_to_committee" })
  lastDebtsOwedToCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=last_report_type_full" })
  lastReportTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=last_report_year" })
  lastReportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments" })
  loanRepayments?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_candidate_loans" })
  loanRepaymentsCandidateLoans?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_made" })
  loanRepaymentsMade?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_other_loans" })
  loanRepaymentsOtherLoans?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_received" })
  loanRepaymentsReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=loans" })
  loans?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_and_loan_repayments_made" })
  loansAndLoanRepaymentsMade?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_and_loan_repayments_received" })
  loansAndLoanRepaymentsReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_made" })
  loansMade?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_made_by_candidate" })
  loansMadeByCandidate?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_received" })
  loansReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_received_from_candidate" })
  loansReceivedFromCandidate?: number;

  @SpeakeasyMetadata({ data: "json, name=net_contributions" })
  netContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=net_operating_expenditures" })
  netOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=non_allocated_fed_election_activity" })
  nonAllocatedFedElectionActivity?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_fundraising_expenditures" })
  offsetsToFundraisingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_legal_accounting" })
  offsetsToLegalAccounting?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures" })
  offsetsToOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=operating_expenditures" })
  operatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=operating_expenditures_percent" })
  operatingExpendituresPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=organization_type" })
  organizationType?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_type_full" })
  organizationTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=other_disbursements" })
  otherDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=other_fed_operating_expenditures" })
  otherFedOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=other_fed_receipts" })
  otherFedReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=other_loans_received" })
  otherLoansReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=other_political_committee_contributions" })
  otherPoliticalCommitteeContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=other_receipts" })
  otherReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=other_refunds" })
  otherRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=party_and_other_committee_contributions_percent" })
  partyAndOtherCommitteeContributionsPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=party_full" })
  partyFull?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=political_party_committee_contributions" })
  politicalPartyCommitteeContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=receipts" })
  receipts?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_individual_contributions" })
  refundedIndividualContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_other_political_committee_contributions" })
  refundedOtherPoliticalCommitteeContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_political_party_committee_contributions" })
  refundedPoliticalPartyCommitteeContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=refunds_relating_convention_exp" })
  refundsRelatingConventionExp?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_loans_made_by_candidate" })
  repaymentsLoansMadeByCandidate?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_other_loans" })
  repaymentsOtherLoans?: number;

  @SpeakeasyMetadata({ data: "json, name=report_form" })
  reportForm?: string;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_activity" })
  sharedFedActivity?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_activity_nonfed" })
  sharedFedActivityNonfed?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_operating_expenditures" })
  sharedFedOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_nonfed_operating_expenditures" })
  sharedNonfedOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=total_exp_subject_limits" })
  totalExpSubjectLimits?: number;

  @SpeakeasyMetadata({ data: "json, name=total_independent_contributions" })
  totalIndependentContributions?: number;

  @SpeakeasyMetadata({ data: "json, name=total_independent_expenditures" })
  totalIndependentExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=total_offsets_to_operating_expenditures" })
  totalOffsetsToOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=total_transfers" })
  totalTransfers?: number;

  @SpeakeasyMetadata({ data: "json, name=transaction_coverage_date" })
  transactionCoverageDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committee" })
  transfersFromAffiliatedCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_party" })
  transfersFromAffiliatedParty?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_account" })
  transfersFromNonfedAccount?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_levin" })
  transfersFromNonfedLevin?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_other_authorized_committee" })
  transfersFromOtherAuthorizedCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_to_affiliated_committee" })
  transfersToAffiliatedCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committee" })
  transfersToOtherAuthorizedCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @SpeakeasyMetadata({ data: "json, name=unitemized_convention_exp" })
  unitemizedConventionExp?: number;

  @SpeakeasyMetadata({ data: "json, name=unitemized_other_disb" })
  unitemizedOtherDisb?: number;

  @SpeakeasyMetadata({ data: "json, name=unitemized_other_income" })
  unitemizedOtherIncome?: number;

  @SpeakeasyMetadata({ data: "json, name=unitemized_other_refunds" })
  unitemizedOtherRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=unitemized_refunds_relating_convention_exp" })
  unitemizedRefundsRelatingConventionExp?: number;
}
