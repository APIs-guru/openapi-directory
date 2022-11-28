import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduleConfig
/** 
 * Configuration details about the monitoring schedule.
**/
export class ScheduleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression: string;
}
