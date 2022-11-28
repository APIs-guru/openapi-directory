import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Election extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_election_year" })
  candidateElectionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_pcc_id" })
  candidatePccId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_pcc_name" })
  candidatePccName?: string;

  @SpeakeasyMetadata({ data: "json, name=cash_on_hand_end_period" })
  cashOnHandEndPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=committee_ids" })
  committeeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=incumbent_challenge_full" })
  incumbentChallengeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=party_full" })
  partyFull?: string;

  @SpeakeasyMetadata({ data: "json, name=total_disbursements" })
  totalDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=total_receipts" })
  totalReceipts?: number;
}
