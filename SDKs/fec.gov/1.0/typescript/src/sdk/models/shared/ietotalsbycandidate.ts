import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IeTotalsByCandidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=support_oppose_indicator" })
  supportOpposeIndicator?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
