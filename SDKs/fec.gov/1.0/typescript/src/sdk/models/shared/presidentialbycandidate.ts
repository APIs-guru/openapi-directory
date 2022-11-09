import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PresidentialByCandidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_last_name" })
  candidateLastName?: string;

  @Metadata({ data: "json, name=candidate_party_affiliation" })
  candidatePartyAffiliation?: string;

  @Metadata({ data: "json, name=contributor_state" })
  contributorState?: string;

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;

  @Metadata({ data: "json, name=net_receipts" })
  netReceipts?: number;

  @Metadata({ data: "json, name=rounded_net_receipts" })
  roundedNetReceipts?: number;
}
