import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleAByZip } from "./scheduleabyzip";


export class ScheduleAByZipPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ScheduleAByZip })
  results?: ScheduleAByZip[];
}
