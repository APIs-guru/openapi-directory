import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ElectioneeringByCandidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate" })
  candidate?: string;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=committee" })
  committee?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
