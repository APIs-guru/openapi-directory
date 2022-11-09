import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsLogDeliveryDescription } from "./cloudwatchlogslogdeliverydescription";
import { FirehoseLogDeliveryDescription } from "./firehoselogdeliverydescription";
import { S3LogDeliveryDescription } from "./s3logdeliverydescription";


// WorkerLogDeliveryDescription
/** 
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
**/
export class WorkerLogDeliveryDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchLogs" })
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;

  @Metadata({ data: "json, name=firehose" })
  firehose?: FirehoseLogDeliveryDescription;

  @Metadata({ data: "json, name=s3" })
  s3?: S3LogDeliveryDescription;
}
