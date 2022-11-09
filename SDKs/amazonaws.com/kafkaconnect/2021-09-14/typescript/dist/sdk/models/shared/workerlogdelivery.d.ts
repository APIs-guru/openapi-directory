import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsLogDelivery } from "./cloudwatchlogslogdelivery";
import { FirehoseLogDelivery } from "./firehoselogdelivery";
import { S3LogDelivery } from "./s3logdelivery";
/**
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
**/
export declare class WorkerLogDelivery extends SpeakeasyBase {
    cloudWatchLogs?: CloudWatchLogsLogDelivery;
    firehose?: FirehoseLogDelivery;
    s3?: S3LogDelivery;
}
