import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeekInfo } from "./seekinfo";
import { ScheduleA } from "./schedulea";



export class ScheduleAPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: SeekInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleA })
  results?: ScheduleA[];
}
