import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsLogDeliveryDescription } from "./cloudwatchlogslogdeliverydescription";
import { FirehoseLogDeliveryDescription } from "./firehoselogdeliverydescription";
import { S3LogDeliveryDescription } from "./s3logdeliverydescription";
/**
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
**/
export declare class WorkerLogDeliveryDescription extends SpeakeasyBase {
    cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;
    firehose?: FirehoseLogDeliveryDescription;
    s3?: S3LogDeliveryDescription;
}
