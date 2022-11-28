import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputLogEvent
/** 
 * Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
**/
export class InputLogEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: number;
}
