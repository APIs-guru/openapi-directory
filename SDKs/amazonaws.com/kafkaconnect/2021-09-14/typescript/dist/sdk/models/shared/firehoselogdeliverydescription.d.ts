import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
**/
export declare class FirehoseLogDeliveryDescription extends SpeakeasyBase {
    deliveryStream?: string;
    enabled?: boolean;
}
