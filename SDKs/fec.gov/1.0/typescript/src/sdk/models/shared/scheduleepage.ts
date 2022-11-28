import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeekInfo } from "./seekinfo";
import { ScheduleE } from "./schedulee";



export class ScheduleEPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: SeekInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleE })
  results?: ScheduleE[];
}
