import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduleTransferRunsRequest
/** 
 * A request to schedule transfer runs for a time range.
**/
export class ScheduleTransferRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
