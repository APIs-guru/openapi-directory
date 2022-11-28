import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EcTotalsByCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
