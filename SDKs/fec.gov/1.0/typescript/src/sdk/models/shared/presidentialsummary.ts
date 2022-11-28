import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PresidentialSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_contributions_less_repayments" })
  candidateContributionsLessRepayments?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_party_affiliation" })
  candidatePartyAffiliation?: string;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_end" })
  cashOnHandEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=committee_designation" })
  committeeDesignation?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @SpeakeasyMetadata({ data: "json, name=disbursements_less_offsets" })
  disbursementsLessOffsets?: number;

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=exempt_legal_accounting_disbursement" })
  exemptLegalAccountingDisbursement?: number;

  @SpeakeasyMetadata({ data: "json, name=federal_funds" })
  federalFunds?: number;

  @SpeakeasyMetadata({ data: "json, name=fundraising_disbursements" })
  fundraisingDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=individual_contributions_less_refunds" })
  individualContributionsLessRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=net_receipts" })
  netReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=offsets_to_operating_expenditures" })
  offsetsToOperatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=operating_expenditures" })
  operatingExpenditures?: number;

  @SpeakeasyMetadata({ data: "json, name=other_disbursements" })
  otherDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=pac_contributions_less_refunds" })
  pacContributionsLessRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=party_contributions_less_refunds" })
  partyContributionsLessRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_loans_made_by_candidate" })
  repaymentsLoansMadeByCandidate?: number;

  @SpeakeasyMetadata({ data: "json, name=repayments_other_loans" })
  repaymentsOtherLoans?: number;

  @SpeakeasyMetadata({ data: "json, name=rounded_net_receipts" })
  roundedNetReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=total_contribution_refunds" })
  totalContributionRefunds?: number;

  @SpeakeasyMetadata({ data: "json, name=total_loan_repayments_made" })
  totalLoanRepaymentsMade?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_from_affiliated_committees" })
  transfersFromAffiliatedCommittees?: number;

  @SpeakeasyMetadata({ data: "json, name=transfers_to_other_authorized_committees" })
  transfersToOtherAuthorizedCommittees?: number;
}
