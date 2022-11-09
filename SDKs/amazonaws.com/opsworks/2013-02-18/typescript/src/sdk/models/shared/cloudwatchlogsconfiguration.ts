import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchLogsLogStream } from "./cloudwatchlogslogstream";


// CloudWatchLogsConfiguration
/** 
 * Describes the Amazon CloudWatch logs configuration for a layer.
**/
export class CloudWatchLogsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=LogStreams", elemType: shared.CloudWatchLogsLogStream })
  logStreams?: CloudWatchLogsLogStream[];
}
