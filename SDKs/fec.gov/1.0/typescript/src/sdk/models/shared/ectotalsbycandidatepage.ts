import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { EcTotalsByCandidate } from "./ectotalsbycandidate";



export class EcTotalsByCandidatePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: EcTotalsByCandidate })
  results?: EcTotalsByCandidate[];
}
