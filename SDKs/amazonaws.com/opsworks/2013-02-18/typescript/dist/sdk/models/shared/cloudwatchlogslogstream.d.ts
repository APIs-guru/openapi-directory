import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsEncodingEnum } from "./cloudwatchlogsencodingenum";
import { CloudWatchLogsInitialPositionEnum } from "./cloudwatchlogsinitialpositionenum";
import { CloudWatchLogsTimeZoneEnum } from "./cloudwatchlogstimezoneenum";
/**
 * Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.
**/
export declare class CloudWatchLogsLogStream extends SpeakeasyBase {
    batchCount?: number;
    batchSize?: number;
    bufferDuration?: number;
    datetimeFormat?: string;
    encoding?: CloudWatchLogsEncodingEnum;
    file?: string;
    fileFingerprintLines?: string;
    initialPosition?: CloudWatchLogsInitialPositionEnum;
    logGroupName?: string;
    multiLineStartPattern?: string;
    timeZone?: CloudWatchLogsTimeZoneEnum;
}
