import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseDestination
/** 
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
**/
export class KinesisFirehoseDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamArn" })
  deliveryStreamArn: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn: string;
}
