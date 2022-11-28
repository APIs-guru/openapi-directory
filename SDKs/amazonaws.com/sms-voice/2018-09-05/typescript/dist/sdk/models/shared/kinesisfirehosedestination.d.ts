import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
**/
export declare class KinesisFirehoseDestination extends SpeakeasyBase {
    deliveryStreamArn?: string;
    iamRoleArn?: string;
}
