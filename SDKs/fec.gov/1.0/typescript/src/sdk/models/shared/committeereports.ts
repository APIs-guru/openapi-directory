import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommitteeReports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregate_amount_personal_contributions_general" })
  aggregateAmountPersonalContributionsGeneral?: number;

  @SpeakeasyMetadata({ data: "json, name=aggregate_contributions_personal_funds_primary" })
  aggregateContributionsPersonalFundsPrimary?: number;

  @SpeakeasyMetadata({ data: "json, name=all_loans_received_period" })
  allLoansReceivedPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=all_loans_received_ytd" })
  allLoansReceivedYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=all_other_loans_period" })
  allOtherLoansPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=all_other_loans_ytd" })
  allOtherLoansYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=allocated_federal_election_levin_share_period" })
  allocatedFederalElectionLevinSharePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=amendment_chain" })
  amendmentChain?: number[];

  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=amendment_indicator_full" })
  amendmentIndicatorFull?: string;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=calendar_ytd" })
  calendarYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_contribution_period" })
  candidateContributionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_contribution_ytd" })
  candidateContributionYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_calendar_ytd" })
  cashOnHandBeginningCalendarYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_beginning_period" })
  cashOnHandBeginningPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_close_ytd" })
  cashOnHandCloseYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=coordinated_expenditures_by_party_committee_period" })
  coordinatedExpendituresByPartyCommitteePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=coordinated_expenditures_by_party_committee_ytd" })
  coordinatedExpendituresByPartyCommitteeYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=coverage_start_date" })
  coverageStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=debts_owed_to_committee" })
  debtsOwedToCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=document_description" })
  documentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=end_image_number" })
  endImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement_period" })
  exemptLegalAccountingDisbursementPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement_ytd" })
  exemptLegalAccountingDisbursementYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=expenditure_subject_to_limits" })
  expenditureSubjectToLimits?: number;

  @SpeakeasyMetadata({ data: "json, name=fec_file_id" })
  fecFileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contribution_refunds_ytd" })
  fedCandidateCommitteeContributionRefundsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contributions_period" })
  fedCandidateCommitteeContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_candidate_committee_contributions_ytd" })
  fedCandidateCommitteeContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=fed_candidate_contribution_refunds_period" })
  fedCandidateContributionRefundsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=federal_funds_period" })
  federalFundsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=federal_funds_ytd" })
  federalFundsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=fundraising_disbursements_period" })
  fundraisingDisbursementsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=fundraising_disbursements_ytd" })
  fundraisingDisbursementsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=gross_receipt_authorized_committee_general" })
  grossReceiptAuthorizedCommitteeGeneral?: number;

  @SpeakeasyMetadata({ data: "json, name=gross_receipt_authorized_committee_primary" })
  grossReceiptAuthorizedCommitteePrimary?: number;

  @SpeakeasyMetadata({ data: "json, name=gross_receipt_minus_personal_contribution_general" })
  grossReceiptMinusPersonalContributionGeneral?: number;

  @SpeakeasyMetadata({ data: "json, name=gross_receipt_minus_personal_contributions_primary" })
  grossReceiptMinusPersonalContributionsPrimary?: number;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=independent_contributions_period" })
  independentContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=independent_expenditures_period" })
  independentExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=independent_expenditures_ytd" })
  independentExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_itemized_contributions_period" })
  individualItemizedContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_itemized_contributions_ytd" })
  individualItemizedContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_unitemized_contributions_period" })
  individualUnitemizedContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_unitemized_contributions_ytd" })
  individualUnitemizedContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=is_amended" })
  isAmended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items_on_hand_liquidated" })
  itemsOnHandLiquidated?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_candidate_loans_period" })
  loanRepaymentsCandidateLoansPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_candidate_loans_ytd" })
  loanRepaymentsCandidateLoansYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_made_period" })
  loanRepaymentsMadePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_made_ytd" })
  loanRepaymentsMadeYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_other_loans_period" })
  loanRepaymentsOtherLoansPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_other_loans_ytd" })
  loanRepaymentsOtherLoansYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_received_period" })
  loanRepaymentsReceivedPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=loan_repayments_received_ytd" })
  loanRepaymentsReceivedYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_made_by_candidate_period" })
  loansMadeByCandidatePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_made_by_candidate_ytd" })
  loansMadeByCandidateYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_made_period" })
  loansMadePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_made_ytd" })
  loansMadeYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_received_from_candidate_period" })
  loansReceivedFromCandidatePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=loans_received_from_candidate_ytd" })
  loansReceivedFromCandidateYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=means_filed" })
  meansFiled?: string;

  @SpeakeasyMetadata({ data: "json, name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=most_recent_file_number" })
  mostRecentFileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=net_contributions_cycle_to_date" })
  netContributionsCycleToDate?: number;

  @SpeakeasyMetadata({ data: "json, name=net_contributions_period" })
  netContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=net_contributions_ytd" })
  netContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_cycle_to_date" })
  netOperatingExpendituresCycleToDate?: number;

  @SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_period" })
  netOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=net_operating_expenditures_ytd" })
  netOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=non_allocated_fed_election_activity_period" })
  nonAllocatedFedElectionActivityPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=non_allocated_fed_election_activity_ytd" })
  nonAllocatedFedElectionActivityYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=nonfed_share_allocated_disbursements_period" })
  nonfedShareAllocatedDisbursementsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_fundraising_expenditures_period" })
  offsetsToFundraisingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_fundraising_expenditures_ytd" })
  offsetsToFundraisingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_legal_accounting_period" })
  offsetsToLegalAccountingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_legal_accounting_ytd" })
  offsetsToLegalAccountingYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures_period" })
  offsetsToOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures_ytd" })
  offsetsToOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=operating_expenditures_period" })
  operatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=operating_expenditures_ytd" })
  operatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=other_disbursements_period" })
  otherDisbursementsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=other_disbursements_ytd" })
  otherDisbursementsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=other_fed_operating_expenditures_period" })
  otherFedOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=other_fed_operating_expenditures_ytd" })
  otherFedOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=other_fed_receipts_period" })
  otherFedReceiptsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=other_fed_receipts_ytd" })
  otherFedReceiptsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=other_loans_received_period" })
  otherLoansReceivedPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=other_loans_received_ytd" })
  otherLoansReceivedYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=other_political_committee_contributions_period" })
  otherPoliticalCommitteeContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=other_political_committee_contributions_ytd" })
  otherPoliticalCommitteeContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=other_receipts_period" })
  otherReceiptsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=other_receipts_ytd" })
  otherReceiptsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=political_party_committee_contributions_period" })
  politicalPartyCommitteeContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=political_party_committee_contributions_ytd" })
  politicalPartyCommitteeContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_file_number" })
  previousFileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=refunded_individual_contributions_period" })
  refundedIndividualContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_individual_contributions_ytd" })
  refundedIndividualContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_other_political_committee_contributions_period" })
  refundedOtherPoliticalCommitteeContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_other_political_committee_contributions_ytd" })
  refundedOtherPoliticalCommitteeContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_political_party_committee_contributions_period" })
  refundedPoliticalPartyCommitteeContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=refunded_political_party_committee_contributions_ytd" })
  refundedPoliticalPartyCommitteeContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=refunds_total_contributions_col_total_ytd" })
  refundsTotalContributionsColTotalYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_loans_made_by_candidate_period" })
  repaymentsLoansMadeByCandidatePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_loans_made_candidate_ytd" })
  repaymentsLoansMadeCandidateYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_other_loans_period" })
  repaymentsOtherLoansPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_other_loans_ytd" })
  repaymentsOtherLoansYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=report_form" })
  reportForm?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type_full" })
  reportTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_activity_nonfed_ytd" })
  sharedFedActivityNonfedYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_activity_period" })
  sharedFedActivityPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_activity_ytd" })
  sharedFedActivityYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_operating_expenditures_period" })
  sharedFedOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_fed_operating_expenditures_ytd" })
  sharedFedOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_nonfed_operating_expenditures_period" })
  sharedNonfedOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=shared_nonfed_operating_expenditures_ytd" })
  sharedNonfedOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=subtotal_period" })
  subtotalPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=subtotal_summary_page_period" })
  subtotalSummaryPagePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=subtotal_summary_period" })
  subtotalSummaryPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=subtotal_summary_ytd" })
  subtotalSummaryYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_contribution_refunds_col_total_period" })
  totalContributionRefundsColTotalPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_contribution_refunds_period" })
  totalContributionRefundsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_contribution_refunds_ytd" })
  totalContributionRefundsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_contributions_column_total_period" })
  totalContributionsColumnTotalPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_contributions_period" })
  totalContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_contributions_ytd" })
  totalContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_disbursements_period" })
  totalDisbursementsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_disbursements_ytd" })
  totalDisbursementsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_disbursements_period" })
  totalFedDisbursementsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_disbursements_ytd" })
  totalFedDisbursementsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_election_activity_period" })
  totalFedElectionActivityPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_election_activity_ytd" })
  totalFedElectionActivityYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_operating_expenditures_period" })
  totalFedOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_operating_expenditures_ytd" })
  totalFedOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_receipts_period" })
  totalFedReceiptsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_fed_receipts_ytd" })
  totalFedReceiptsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_individual_contributions_period" })
  totalIndividualContributionsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_individual_contributions_ytd" })
  totalIndividualContributionsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_loan_repayments_made_period" })
  totalLoanRepaymentsMadePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_loan_repayments_made_ytd" })
  totalLoanRepaymentsMadeYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_loans_received_period" })
  totalLoansReceivedPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_loans_received_ytd" })
  totalLoansReceivedYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_nonfed_transfers_period" })
  totalNonfedTransfersPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_nonfed_transfers_ytd" })
  totalNonfedTransfersYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_offsets_to_operating_expenditures_period" })
  totalOffsetsToOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_offsets_to_operating_expenditures_ytd" })
  totalOffsetsToOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_operating_expenditures_period" })
  totalOperatingExpendituresPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_operating_expenditures_ytd" })
  totalOperatingExpendituresYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_period" })
  totalPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_receipts_period" })
  totalReceiptsPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=total_receipts_ytd" })
  totalReceiptsYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=total_ytd" })
  totalYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committee_period" })
  transfersFromAffiliatedCommitteePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committee_ytd" })
  transfersFromAffiliatedCommitteeYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_party_period" })
  transfersFromAffiliatedPartyPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_party_ytd" })
  transfersFromAffiliatedPartyYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_account_period" })
  transfersFromNonfedAccountPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_account_ytd" })
  transfersFromNonfedAccountYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_levin_period" })
  transfersFromNonfedLevinPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_nonfed_levin_ytd" })
  transfersFromNonfedLevinYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_other_authorized_committee_period" })
  transfersFromOtherAuthorizedCommitteePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_other_authorized_committee_ytd" })
  transfersFromOtherAuthorizedCommitteeYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_to_affiliated_committee_period" })
  transfersToAffiliatedCommitteePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_to_affilitated_committees_ytd" })
  transfersToAffilitatedCommitteesYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committee_period" })
  transfersToOtherAuthorizedCommitteePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committee_ytd" })
  transfersToOtherAuthorizedCommitteeYtd?: number;
}
