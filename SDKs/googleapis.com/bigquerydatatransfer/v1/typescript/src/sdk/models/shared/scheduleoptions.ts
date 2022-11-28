import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduleOptions
/** 
 * Options customizing the data transfer schedule.
**/
export class ScheduleOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableAutoScheduling" })
  disableAutoScheduling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
