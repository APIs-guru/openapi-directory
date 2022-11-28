import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsEncodingEnum } from "./cloudwatchlogsencodingenum";
import { CloudWatchLogsInitialPositionEnum } from "./cloudwatchlogsinitialpositionenum";
import { CloudWatchLogsTimeZoneEnum } from "./cloudwatchlogstimezoneenum";



// CloudWatchLogsLogStream
/** 
 * Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.
**/
export class CloudWatchLogsLogStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchCount" })
  batchCount?: number;

  @SpeakeasyMetadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=BufferDuration" })
  bufferDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=DatetimeFormat" })
  datetimeFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=Encoding" })
  encoding?: CloudWatchLogsEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=File" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=FileFingerprintLines" })
  fileFingerprintLines?: string;

  @SpeakeasyMetadata({ data: "json, name=InitialPosition" })
  initialPosition?: CloudWatchLogsInitialPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiLineStartPattern" })
  multiLineStartPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeZone" })
  timeZone?: CloudWatchLogsTimeZoneEnum;
}
