import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleEByCandidate } from "./scheduleebycandidate";


export class ScheduleEByCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleEByCandidate })
  results?: ScheduleEByCandidate[];
}
