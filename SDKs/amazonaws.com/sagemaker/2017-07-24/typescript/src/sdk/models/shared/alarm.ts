import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alarm
/** 
 * This API is not supported.
**/
export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlarmName" })
  alarmName?: string;
}
