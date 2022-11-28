import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleAByStateCandidate } from "./scheduleabystatecandidate";



export class ScheduleAByStateCandidatePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleAByStateCandidate })
  results?: ScheduleAByStateCandidate[];
}
