import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommitteeReports extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregate_amount_personal_contributions_general" })
  aggregateAmountPersonalContributionsGeneral?: number;

  @Metadata({ data: "json, name=aggregate_contributions_personal_funds_primary" })
  aggregateContributionsPersonalFundsPrimary?: number;

  @Metadata({ data: "json, name=all_loans_received_period" })
  allLoansReceivedPeriod?: number;

  @Metadata({ data: "json, name=all_loans_received_ytd" })
  allLoansReceivedYtd?: number;

  @Metadata({ data: "json, name=all_other_loans_period" })
  allOtherLoansPeriod?: number;

  @Metadata({ data: "json, name=all_other_loans_ytd" })
  allOtherLoansYtd?: number;

  @Metadata({ data: "json, name=allocated_federal_election_levin_share_period" })
  allocatedFederalElectionLevinSharePeriod?: number;

  @Metadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=amendment_indicator_full" })
  amendmentIndicatorFull?: string;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=calendar_ytd" })
  calendarYtd?: number;

  @Metadata({ data: "json, name=candidate_contribution_period" })
  candidateContributionPeriod?: number;

  @Metadata({ data: "json, name=candidate_contribution_ytd" })
  candidateContributionYtd?: number;

  @Metadata({ data: "json, name=cash_on_hand_beginning_calendar_ytd" })
  cashOnHandBeginningCalendarYtd?: number;

  @Metadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @Metadata({ data: "json, name=cash_on_hand_close_ytd" })
  cashOnHandCloseYtd?: number;

  @Metadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=coordinated_expenditures_by_party_committee_period" })
  coordinatedExpendituresByPartyCommitteePeriod?: number;

  @Metadata({ data: "json, name=coordinated_expenditures_by_party_committee_ytd" })
  coordinatedExpendituresByPartyCommitteeYtd?: number;

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @Metadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @Metadata({ data: "json, name=debts_owed_to_committee" })
  debtsOwedToCommittee?: number;

  @Metadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @Metadata({ data: "json, name=end_image_number" })
  endImageNumber?: string;

  @Metadata({ data: "json, name=exempt_legal_accounting_disbursement_period" })
  exemptLegalAccountingDisbursementPeriod?: number;

  @Metadata({ data: "json, name=exempt_legal_accounting_disbursement_ytd" })
  exemptLegalAccountingDisbursementYtd?: number;

  @Metadata({ data: "json, name=expenditure_subject_to_limits" })
  expenditureSubjectToLimits?: number;

  @Metadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=fed_candidate_committee_contribution_refunds_ytd" })
  fedCandidateCommitteeContributionRefundsYtd?: number;

  @Metadata({ data: "json, name=fed_candidate_committee_contributions_period" })
  fedCandidateCommitteeContributionsPeriod?: number;

  @Metadata({ data: "json, name=fed_candidate_committee_contributions_ytd" })
  fedCandidateCommitteeContributionsYtd?: number;

  @Metadata({ data: "json, name=fed_candidate_contribution_refunds_period" })
  fedCandidateContributionRefundsPeriod?: number;

  @Metadata({ data: "json, name=federal_funds_period" })
  federalFundsPeriod?: number;

  @Metadata({ data: "json, name=federal_funds_ytd" })
  federalFundsYtd?: number;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=fundraising_disbursements_period" })
  fundraisingDisbursementsPeriod?: number;

  @Metadata({ data: "json, name=fundraising_disbursements_ytd" })
  fundraisingDisbursementsYtd?: number;

  @Metadata({ data: "json, name=gross_receipt_authorized_committee_general" })
  grossReceiptAuthorizedCommitteeGeneral?: number;

  @Metadata({ data: "json, name=gross_receipt_authorized_committee_primary" })
  grossReceiptAuthorizedCommitteePrimary?: number;

  @Metadata({ data: "json, name=gross_receipt_minus_personal_contribution_general" })
  grossReceiptMinusPersonalContributionGeneral?: number;

  @Metadata({ data: "json, name=gross_receipt_minus_personal_contributions_primary" })
  grossReceiptMinusPersonalContributionsPrimary?: number;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=independent_contributions_period" })
  independentContributionsPeriod?: number;

  @Metadata({ data: "json, name=independent_expenditures_period" })
  independentExpendituresPeriod?: number;

  @Metadata({ data: "json, name=independent_expenditures_ytd" })
  independentExpendituresYtd?: number;

  @Metadata({ data: "json, name=individual_itemized_contributions_period" })
  individualItemizedContributionsPeriod?: number;

  @Metadata({ data: "json, name=individual_itemized_contributions_ytd" })
  individualItemizedContributionsYtd?: number;

  @Metadata({ data: "json, name=individual_unitemized_contributions_period" })
  individualUnitemizedContributionsPeriod?: number;

  @Metadata({ data: "json, name=individual_unitemized_contributions_ytd" })
  individualUnitemizedContributionsYtd?: number;

  @Metadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @Metadata({ data: "json, name=items_on_hand_liquidated" })
  itemsOnHandLiquidated?: number;

  @Metadata({ data: "json, name=loan_repayments_candidate_loans_period" })
  loanRepaymentsCandidateLoansPeriod?: number;

  @Metadata({ data: "json, name=loan_repayments_candidate_loans_ytd" })
  loanRepaymentsCandidateLoansYtd?: number;

  @Metadata({ data: "json, name=loan_repayments_made_period" })
  loanRepaymentsMadePeriod?: number;

  @Metadata({ data: "json, name=loan_repayments_made_ytd" })
  loanRepaymentsMadeYtd?: number;

  @Metadata({ data: "json, name=loan_repayments_other_loans_period" })
  loanRepaymentsOtherLoansPeriod?: number;

  @Metadata({ data: "json, name=loan_repayments_other_loans_ytd" })
  loanRepaymentsOtherLoansYtd?: number;

  @Metadata({ data: "json, name=loan_repayments_received_period" })
  loanRepaymentsReceivedPeriod?: number;

  @Metadata({ data: "json, name=loan_repayments_received_ytd" })
  loanRepaymentsReceivedYtd?: number;

  @Metadata({ data: "json, name=loans_made_by_candidate_period" })
  loansMadeByCandidatePeriod?: number;

  @Metadata({ data: "json, name=loans_made_by_candidate_ytd" })
  loansMadeByCandidateYtd?: number;

  @Metadata({ data: "json, name=loans_made_period" })
  loansMadePeriod?: number;

  @Metadata({ data: "json, name=loans_made_ytd" })
  loansMadeYtd?: number;

  @Metadata({ data: "json, name=loans_received_from_candidate_period" })
  loansReceivedFromCandidatePeriod?: number;

  @Metadata({ data: "json, name=loans_received_from_candidate_ytd" })
  loansReceivedFromCandidateYtd?: number;

  @Metadata({ data: "json, name=means_filed" })
  meansFiled?: string;

  @Metadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "json, name=most_recent_file_number" })
  mostRecentFileNumber?: number;

  @Metadata({ data: "json, name=net_contributions_cycle_to_date" })
  netContributionsCycleToDate?: number;

  @Metadata({ data: "json, name=net_contributions_period" })
  netContributionsPeriod?: number;

  @Metadata({ data: "json, name=net_contributions_ytd" })
  netContributionsYtd?: number;

  @Metadata({ data: "json, name=net_operating_expenditures_cycle_to_date" })
  netOperatingExpendituresCycleToDate?: number;

  @Metadata({ data: "json, name=net_operating_expenditures_period" })
  netOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=net_operating_expenditures_ytd" })
  netOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=non_allocated_fed_election_activity_period" })
  nonAllocatedFedElectionActivityPeriod?: number;

  @Metadata({ data: "json, name=non_allocated_fed_election_activity_ytd" })
  nonAllocatedFedElectionActivityYtd?: number;

  @Metadata({ data: "json, name=nonfed_share_allocated_disbursements_period" })
  nonfedShareAllocatedDisbursementsPeriod?: number;

  @Metadata({ data: "json, name=offsets_to_fundraising_expenditures_period" })
  offsetsToFundraisingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=offsets_to_fundraising_expenditures_ytd" })
  offsetsToFundraisingExpendituresYtd?: number;

  @Metadata({ data: "json, name=offsets_to_legal_accounting_period" })
  offsetsToLegalAccountingPeriod?: number;

  @Metadata({ data: "json, name=offsets_to_legal_accounting_ytd" })
  offsetsToLegalAccountingYtd?: number;

  @Metadata({ data: "json, name=offsets_to_operating_expenditures_period" })
  offsetsToOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=offsets_to_operating_expenditures_ytd" })
  offsetsToOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=operating_expenditures_period" })
  operatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=operating_expenditures_ytd" })
  operatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=other_disbursements_period" })
  otherDisbursementsPeriod?: number;

  @Metadata({ data: "json, name=other_disbursements_ytd" })
  otherDisbursementsYtd?: number;

  @Metadata({ data: "json, name=other_fed_operating_expenditures_period" })
  otherFedOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=other_fed_operating_expenditures_ytd" })
  otherFedOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=other_fed_receipts_period" })
  otherFedReceiptsPeriod?: number;

  @Metadata({ data: "json, name=other_fed_receipts_ytd" })
  otherFedReceiptsYtd?: number;

  @Metadata({ data: "json, name=other_loans_received_period" })
  otherLoansReceivedPeriod?: number;

  @Metadata({ data: "json, name=other_loans_received_ytd" })
  otherLoansReceivedYtd?: number;

  @Metadata({ data: "json, name=other_political_committee_contributions_period" })
  otherPoliticalCommitteeContributionsPeriod?: number;

  @Metadata({ data: "json, name=other_political_committee_contributions_ytd" })
  otherPoliticalCommitteeContributionsYtd?: number;

  @Metadata({ data: "json, name=other_receipts_period" })
  otherReceiptsPeriod?: number;

  @Metadata({ data: "json, name=other_receipts_ytd" })
  otherReceiptsYtd?: number;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=political_party_committee_contributions_period" })
  politicalPartyCommitteeContributionsPeriod?: number;

  @Metadata({ data: "json, name=political_party_committee_contributions_ytd" })
  politicalPartyCommitteeContributionsYtd?: number;

  @Metadata({ data: "json, name=previous_file_number" })
  previousFileNumber?: number;

  @Metadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @Metadata({ data: "json, name=refunded_individual_contributions_period" })
  refundedIndividualContributionsPeriod?: number;

  @Metadata({ data: "json, name=refunded_individual_contributions_ytd" })
  refundedIndividualContributionsYtd?: number;

  @Metadata({ data: "json, name=refunded_other_political_committee_contributions_period" })
  refundedOtherPoliticalCommitteeContributionsPeriod?: number;

  @Metadata({ data: "json, name=refunded_other_political_committee_contributions_ytd" })
  refundedOtherPoliticalCommitteeContributionsYtd?: number;

  @Metadata({ data: "json, name=refunded_political_party_committee_contributions_period" })
  refundedPoliticalPartyCommitteeContributionsPeriod?: number;

  @Metadata({ data: "json, name=refunded_political_party_committee_contributions_ytd" })
  refundedPoliticalPartyCommitteeContributionsYtd?: number;

  @Metadata({ data: "json, name=refunds_total_contributions_col_total_ytd" })
  refundsTotalContributionsColTotalYtd?: number;

  @Metadata({ data: "json, name=repayments_loans_made_by_candidate_period" })
  repaymentsLoansMadeByCandidatePeriod?: number;

  @Metadata({ data: "json, name=repayments_loans_made_candidate_ytd" })
  repaymentsLoansMadeCandidateYtd?: number;

  @Metadata({ data: "json, name=repayments_other_loans_period" })
  repaymentsOtherLoansPeriod?: number;

  @Metadata({ data: "json, name=repayments_other_loans_ytd" })
  repaymentsOtherLoansYtd?: number;

  @Metadata({ data: "json, name=report_form" })
  reportForm?: string;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_type_full" })
  reportTypeFull?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=shared_fed_activity_nonfed_ytd" })
  sharedFedActivityNonfedYtd?: number;

  @Metadata({ data: "json, name=shared_fed_activity_period" })
  sharedFedActivityPeriod?: number;

  @Metadata({ data: "json, name=shared_fed_activity_ytd" })
  sharedFedActivityYtd?: number;

  @Metadata({ data: "json, name=shared_fed_operating_expenditures_period" })
  sharedFedOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=shared_fed_operating_expenditures_ytd" })
  sharedFedOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=shared_nonfed_operating_expenditures_period" })
  sharedNonfedOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=shared_nonfed_operating_expenditures_ytd" })
  sharedNonfedOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=subtotal_period" })
  subtotalPeriod?: number;

  @Metadata({ data: "json, name=subtotal_summary_page_period" })
  subtotalSummaryPagePeriod?: number;

  @Metadata({ data: "json, name=subtotal_summary_period" })
  subtotalSummaryPeriod?: number;

  @Metadata({ data: "json, name=subtotal_summary_ytd" })
  subtotalSummaryYtd?: number;

  @Metadata({ data: "json, name=total_contribution_refunds_col_total_period" })
  totalContributionRefundsColTotalPeriod?: number;

  @Metadata({ data: "json, name=total_contribution_refunds_period" })
  totalContributionRefundsPeriod?: number;

  @Metadata({ data: "json, name=total_contribution_refunds_ytd" })
  totalContributionRefundsYtd?: number;

  @Metadata({ data: "json, name=total_contributions_column_total_period" })
  totalContributionsColumnTotalPeriod?: number;

  @Metadata({ data: "json, name=total_contributions_period" })
  totalContributionsPeriod?: number;

  @Metadata({ data: "json, name=total_contributions_ytd" })
  totalContributionsYtd?: number;

  @Metadata({ data: "json, name=total_disbursements_period" })
  totalDisbursementsPeriod?: number;

  @Metadata({ data: "json, name=total_disbursements_ytd" })
  totalDisbursementsYtd?: number;

  @Metadata({ data: "json, name=total_fed_disbursements_period" })
  totalFedDisbursementsPeriod?: number;

  @Metadata({ data: "json, name=total_fed_disbursements_ytd" })
  totalFedDisbursementsYtd?: number;

  @Metadata({ data: "json, name=total_fed_election_activity_period" })
  totalFedElectionActivityPeriod?: number;

  @Metadata({ data: "json, name=total_fed_election_activity_ytd" })
  totalFedElectionActivityYtd?: number;

  @Metadata({ data: "json, name=total_fed_operating_expenditures_period" })
  totalFedOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=total_fed_operating_expenditures_ytd" })
  totalFedOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=total_fed_receipts_period" })
  totalFedReceiptsPeriod?: number;

  @Metadata({ data: "json, name=total_fed_receipts_ytd" })
  totalFedReceiptsYtd?: number;

  @Metadata({ data: "json, name=total_individual_contributions_period" })
  totalIndividualContributionsPeriod?: number;

  @Metadata({ data: "json, name=total_individual_contributions_ytd" })
  totalIndividualContributionsYtd?: number;

  @Metadata({ data: "json, name=total_loan_repayments_made_period" })
  totalLoanRepaymentsMadePeriod?: number;

  @Metadata({ data: "json, name=total_loan_repayments_made_ytd" })
  totalLoanRepaymentsMadeYtd?: number;

  @Metadata({ data: "json, name=total_loans_received_period" })
  totalLoansReceivedPeriod?: number;

  @Metadata({ data: "json, name=total_loans_received_ytd" })
  totalLoansReceivedYtd?: number;

  @Metadata({ data: "json, name=total_nonfed_transfers_period" })
  totalNonfedTransfersPeriod?: number;

  @Metadata({ data: "json, name=total_nonfed_transfers_ytd" })
  totalNonfedTransfersYtd?: number;

  @Metadata({ data: "json, name=total_offsets_to_operating_expenditures_period" })
  totalOffsetsToOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=total_offsets_to_operating_expenditures_ytd" })
  totalOffsetsToOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=total_operating_expenditures_period" })
  totalOperatingExpendituresPeriod?: number;

  @Metadata({ data: "json, name=total_operating_expenditures_ytd" })
  totalOperatingExpendituresYtd?: number;

  @Metadata({ data: "json, name=total_period" })
  totalPeriod?: number;

  @Metadata({ data: "json, name=total_receipts_period" })
  totalReceiptsPeriod?: number;

  @Metadata({ data: "json, name=total_receipts_ytd" })
  totalReceiptsYtd?: number;

  @Metadata({ data: "json, name=total_ytd" })
  totalYtd?: number;

  @Metadata({ data: "json, name=transfers_from_affiliated_committee_period" })
  transfersFromAffiliatedCommitteePeriod?: number;

  @Metadata({ data: "json, name=transfers_from_affiliated_committee_ytd" })
  transfersFromAffiliatedCommitteeYtd?: number;

  @Metadata({ data: "json, name=transfers_from_affiliated_party_period" })
  transfersFromAffiliatedPartyPeriod?: number;

  @Metadata({ data: "json, name=transfers_from_affiliated_party_ytd" })
  transfersFromAffiliatedPartyYtd?: number;

  @Metadata({ data: "json, name=transfers_from_nonfed_account_period" })
  transfersFromNonfedAccountPeriod?: number;

  @Metadata({ data: "json, name=transfers_from_nonfed_account_ytd" })
  transfersFromNonfedAccountYtd?: number;

  @Metadata({ data: "json, name=transfers_from_nonfed_levin_period" })
  transfersFromNonfedLevinPeriod?: number;

  @Metadata({ data: "json, name=transfers_from_nonfed_levin_ytd" })
  transfersFromNonfedLevinYtd?: number;

  @Metadata({ data: "json, name=transfers_from_other_authorized_committee_period" })
  transfersFromOtherAuthorizedCommitteePeriod?: number;

  @Metadata({ data: "json, name=transfers_from_other_authorized_committee_ytd" })
  transfersFromOtherAuthorizedCommitteeYtd?: number;

  @Metadata({ data: "json, name=transfers_to_affiliated_committee_period" })
  transfersToAffiliatedCommitteePeriod?: number;

  @Metadata({ data: "json, name=transfers_to_affilitated_committees_ytd" })
  transfersToAffilitatedCommitteesYtd?: number;

  @Metadata({ data: "json, name=transfers_to_other_authorized_committee_period" })
  transfersToOtherAuthorizedCommitteePeriod?: number;

  @Metadata({ data: "json, name=transfers_to_other_authorized_committee_ytd" })
  transfersToOtherAuthorizedCommitteeYtd?: number;
}
