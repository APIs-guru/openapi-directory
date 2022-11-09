import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogGroupLogDestination } from "./cloudwatchloggrouplogdestination";


// TextLogDestination
/** 
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
**/
export class TextLogDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatch" })
  cloudWatch: CloudWatchLogGroupLogDestination;
}
