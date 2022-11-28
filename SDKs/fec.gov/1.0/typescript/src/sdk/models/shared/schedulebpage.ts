import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeekInfo } from "./seekinfo";
import { ScheduleB } from "./scheduleb";



export class ScheduleBPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: SeekInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleB })
  results?: ScheduleB[];
}
