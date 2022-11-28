import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { ElectioneeringByCandidate } from "./electioneeringbycandidate";



export class ElectioneeringByCandidatePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ElectioneeringByCandidate })
  results?: ElectioneeringByCandidate[];
}
