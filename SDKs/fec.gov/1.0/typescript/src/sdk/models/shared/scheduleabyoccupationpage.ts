import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleAByOccupation } from "./scheduleabyoccupation";



export class ScheduleAByOccupationPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleAByOccupation })
  results?: ScheduleAByOccupation[];
}
