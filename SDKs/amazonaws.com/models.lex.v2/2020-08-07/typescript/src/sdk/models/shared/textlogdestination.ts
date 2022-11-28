import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogGroupLogDestination } from "./cloudwatchloggrouplogdestination";



// TextLogDestination
/** 
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
**/
export class TextLogDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatch" })
  cloudWatch: CloudWatchLogGroupLogDestination;
}
