import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScheduleOptions
/** 
 * Options customizing the data transfer schedule.
**/
export class ScheduleOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableAutoScheduling" })
  disableAutoScheduling?: boolean;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
