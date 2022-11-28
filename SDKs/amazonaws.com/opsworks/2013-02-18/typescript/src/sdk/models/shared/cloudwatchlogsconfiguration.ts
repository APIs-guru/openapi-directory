import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsLogStream } from "./cloudwatchlogslogstream";



// CloudWatchLogsConfiguration
/** 
 * Describes the Amazon CloudWatch logs configuration for a layer.
**/
export class CloudWatchLogsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LogStreams", elemType: CloudWatchLogsLogStream })
  logStreams?: CloudWatchLogsLogStream[];
}
