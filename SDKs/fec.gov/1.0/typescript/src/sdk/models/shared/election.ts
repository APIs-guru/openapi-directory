import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Election extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_election_year" })
  candidateElectionYear?: number;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=candidate_pcc_id" })
  candidatePccId?: string;

  @Metadata({ data: "json, name=candidate_pcc_name" })
  candidatePccName?: string;

  @Metadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @Metadata({ data: "json, name=committee_ids" })
  committeeIds?: string[];

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=incumbent_challenge_full" })
  incumbentChallengeFull?: string;

  @Metadata({ data: "json, name=party_full" })
  partyFull?: string;

  @Metadata({ data: "json, name=total_disbursements" })
  totalDisbursements?: number;

  @Metadata({ data: "json, name=total_receipts" })
  totalReceipts?: number;
}
