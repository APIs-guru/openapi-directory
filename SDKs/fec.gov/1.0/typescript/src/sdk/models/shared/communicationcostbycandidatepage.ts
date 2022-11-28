import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CommunicationCostByCandidate } from "./communicationcostbycandidate";



export class CommunicationCostByCandidatePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CommunicationCostByCandidate })
  results?: CommunicationCostByCandidate[];
}
