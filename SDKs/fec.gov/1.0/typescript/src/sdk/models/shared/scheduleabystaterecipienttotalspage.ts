import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { ScheduleAByStateRecipientTotals } from "./scheduleabystaterecipienttotals";



export class ScheduleAByStateRecipientTotalsPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ScheduleAByStateRecipientTotals })
  results?: ScheduleAByStateRecipientTotals[];
}
