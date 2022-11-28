import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsLogDeliveryDescription } from "./cloudwatchlogslogdeliverydescription";
import { FirehoseLogDeliveryDescription } from "./firehoselogdeliverydescription";
import { S3LogDeliveryDescription } from "./s3logdeliverydescription";



// WorkerLogDeliveryDescription
/** 
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
**/
export class WorkerLogDeliveryDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogs" })
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;

  @SpeakeasyMetadata({ data: "json, name=firehose" })
  firehose?: FirehoseLogDeliveryDescription;

  @SpeakeasyMetadata({ data: "json, name=s3" })
  s3?: S3LogDeliveryDescription;
}
