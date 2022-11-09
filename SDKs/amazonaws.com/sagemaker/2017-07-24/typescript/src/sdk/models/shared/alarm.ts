import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Alarm
/** 
 * This API is not supported.
**/
export class Alarm extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlarmName" })
  alarmName?: string;
}
