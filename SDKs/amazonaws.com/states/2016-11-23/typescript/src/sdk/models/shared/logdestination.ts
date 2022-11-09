import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsLogGroup } from "./cloudwatchlogsloggroup";


// LogDestination
/** 
 * <p/>
**/
export class LogDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchLogsLogGroup" })
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}
