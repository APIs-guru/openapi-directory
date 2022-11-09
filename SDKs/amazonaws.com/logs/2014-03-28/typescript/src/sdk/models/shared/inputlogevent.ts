import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputLogEvent
/** 
 * Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
**/
export class InputLogEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: number;
}
