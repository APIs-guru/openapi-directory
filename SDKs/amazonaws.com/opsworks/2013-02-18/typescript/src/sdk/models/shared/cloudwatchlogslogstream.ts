import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsEncodingEnum } from "./cloudwatchlogsencodingenum";
import { CloudWatchLogsInitialPositionEnum } from "./cloudwatchlogsinitialpositionenum";
import { CloudWatchLogsTimeZoneEnum } from "./cloudwatchlogstimezoneenum";


// CloudWatchLogsLogStream
/** 
 * Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.
**/
export class CloudWatchLogsLogStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchCount" })
  batchCount?: number;

  @Metadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=BufferDuration" })
  bufferDuration?: number;

  @Metadata({ data: "json, name=DatetimeFormat" })
  datetimeFormat?: string;

  @Metadata({ data: "json, name=Encoding" })
  encoding?: CloudWatchLogsEncodingEnum;

  @Metadata({ data: "json, name=File" })
  file?: string;

  @Metadata({ data: "json, name=FileFingerprintLines" })
  fileFingerprintLines?: string;

  @Metadata({ data: "json, name=InitialPosition" })
  initialPosition?: CloudWatchLogsInitialPositionEnum;

  @Metadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=MultiLineStartPattern" })
  multiLineStartPattern?: string;

  @Metadata({ data: "json, name=TimeZone" })
  timeZone?: CloudWatchLogsTimeZoneEnum;
}
