import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleABySizeCandidate } from "./scheduleabysizecandidate";



export class ScheduleABySizeCandidatePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleABySizeCandidate })
  results?: ScheduleABySizeCandidate[];
}
