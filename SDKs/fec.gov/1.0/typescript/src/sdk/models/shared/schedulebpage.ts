import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SeekInfo } from "./seekinfo";
import { ScheduleB } from "./scheduleb";


export class ScheduleBPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: SeekInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleB })
  results?: ScheduleB[];
}
