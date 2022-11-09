import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ElectioneeringByCandidate } from "./electioneeringbycandidate";


export class ElectioneeringByCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ElectioneeringByCandidate })
  results?: ElectioneeringByCandidate[];
}
