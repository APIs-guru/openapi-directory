import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PresidentialSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_contributions_less_repayments" })
  candidateContributionsLessRepayments?: number;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=candidate_party_affiliation" })
  candidatePartyAffiliation?: string;

  @Metadata({ data: "json, name=cash_on_hand_end" })
  cashOnHandEnd?: number;

  @Metadata({ data: "json, name=committee_designation" })
  committeeDesignation?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=debts_owed_by_committee" })
  debtsOwedByCommittee?: number;

  @Metadata({ data: "json, name=disbursements_less_offsets" })
  disbursementsLessOffsets?: number;

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;

  @Metadata({ data: "json, name=exempt_legal_accounting_disbursement" })
  exemptLegalAccountingDisbursement?: number;

  @Metadata({ data: "json, name=federal_funds" })
  federalFunds?: number;

  @Metadata({ data: "json, name=fundraising_disbursements" })
  fundraisingDisbursements?: number;

  @Metadata({ data: "json, name=individual_contributions_less_refunds" })
  individualContributionsLessRefunds?: number;

  @Metadata({ data: "json, name=net_receipts" })
  netReceipts?: number;

  @Metadata({ data: "json, name=offsets_to_operating_expenditures" })
  offsetsToOperatingExpenditures?: number;

  @Metadata({ data: "json, name=operating_expenditures" })
  operatingExpenditures?: number;

  @Metadata({ data: "json, name=other_disbursements" })
  otherDisbursements?: number;

  @Metadata({ data: "json, name=pac_contributions_less_refunds" })
  pacContributionsLessRefunds?: number;

  @Metadata({ data: "json, name=party_contributions_less_refunds" })
  partyContributionsLessRefunds?: number;

  @Metadata({ data: "json, name=repayments_loans_made_by_candidate" })
  repaymentsLoansMadeByCandidate?: number;

  @Metadata({ data: "json, name=repayments_other_loans" })
  repaymentsOtherLoans?: number;

  @Metadata({ data: "json, name=rounded_net_receipts" })
  roundedNetReceipts?: number;

  @Metadata({ data: "json, name=total_contribution_refunds" })
  totalContributionRefunds?: number;

  @Metadata({ data: "json, name=total_loan_repayments_made" })
  totalLoanRepaymentsMade?: number;

  @Metadata({ data: "json, name=transfers_from_affiliated_committees" })
  transfersFromAffiliatedCommittees?: number;

  @Metadata({ data: "json, name=transfers_to_other_authorized_committees" })
  transfersToOtherAuthorizedCommittees?: number;
}
