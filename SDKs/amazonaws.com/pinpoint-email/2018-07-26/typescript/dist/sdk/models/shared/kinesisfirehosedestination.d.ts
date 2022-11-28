import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
**/
export declare class KinesisFirehoseDestination extends SpeakeasyBase {
    deliveryStreamArn: string;
    iamRoleArn: string;
}
