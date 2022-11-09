import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleABySizeCandidate } from "./scheduleabysizecandidate";


export class ScheduleABySizeCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleABySizeCandidate })
  results?: ScheduleABySizeCandidate[];
}
