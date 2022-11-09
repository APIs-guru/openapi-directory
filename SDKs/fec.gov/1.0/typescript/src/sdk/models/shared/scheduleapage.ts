import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SeekInfo } from "./seekinfo";
import { ScheduleA } from "./schedulea";


export class ScheduleAPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: SeekInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleA })
  results?: ScheduleA[];
}
