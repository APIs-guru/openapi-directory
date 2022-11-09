import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScheduleTransferRunsRequest
/** 
 * A request to schedule transfer runs for a time range.
**/
export class ScheduleTransferRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
