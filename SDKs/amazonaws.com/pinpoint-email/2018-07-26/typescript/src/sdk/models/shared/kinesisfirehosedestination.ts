import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseDestination
/** 
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
**/
export class KinesisFirehoseDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamArn" })
  deliveryStreamArn: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn: string;
}
