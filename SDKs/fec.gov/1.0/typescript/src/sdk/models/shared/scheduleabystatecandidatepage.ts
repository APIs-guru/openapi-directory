import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleAByStateCandidate } from "./scheduleabystatecandidate";


export class ScheduleAByStateCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleAByStateCandidate })
  results?: ScheduleAByStateCandidate[];
}
