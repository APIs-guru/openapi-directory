import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsLogGroup } from "./cloudwatchlogsloggroup";



// LogDestination
/** 
 * <p/>
**/
export class LogDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogsLogGroup" })
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}
