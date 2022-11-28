import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PresidentialByCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_party_affiliation" })
  candidatePartyAffiliation?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_state" })
  contributorState?: string;

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=net_receipts" })
  netReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=rounded_net_receipts" })
  roundedNetReceipts?: number;
}
