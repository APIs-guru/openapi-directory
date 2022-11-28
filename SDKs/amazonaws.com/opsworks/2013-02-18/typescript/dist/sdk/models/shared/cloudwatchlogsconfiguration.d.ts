import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsLogStream } from "./cloudwatchlogslogstream";
/**
 * Describes the Amazon CloudWatch logs configuration for a layer.
**/
export declare class CloudWatchLogsConfiguration extends SpeakeasyBase {
    enabled?: boolean;
    logStreams?: CloudWatchLogsLogStream[];
}
