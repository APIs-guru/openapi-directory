import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The settings for delivering logs to Amazon Kinesis Data Firehose.
**/
export declare class FirehoseLogDelivery extends SpeakeasyBase {
    deliveryStream?: string;
    enabled: boolean;
}
