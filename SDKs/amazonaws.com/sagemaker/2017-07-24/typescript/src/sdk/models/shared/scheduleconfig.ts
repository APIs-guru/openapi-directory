import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScheduleConfig
/** 
 * Configuration details about the monitoring schedule.
**/
export class ScheduleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression: string;
}
