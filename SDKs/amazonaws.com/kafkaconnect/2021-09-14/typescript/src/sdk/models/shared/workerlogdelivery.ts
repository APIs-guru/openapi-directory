import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsLogDelivery } from "./cloudwatchlogslogdelivery";
import { FirehoseLogDelivery } from "./firehoselogdelivery";
import { S3LogDelivery } from "./s3logdelivery";



// WorkerLogDelivery
/** 
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
**/
export class WorkerLogDelivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogs" })
  cloudWatchLogs?: CloudWatchLogsLogDelivery;

  @SpeakeasyMetadata({ data: "json, name=firehose" })
  firehose?: FirehoseLogDelivery;

  @SpeakeasyMetadata({ data: "json, name=s3" })
  s3?: S3LogDelivery;
}
