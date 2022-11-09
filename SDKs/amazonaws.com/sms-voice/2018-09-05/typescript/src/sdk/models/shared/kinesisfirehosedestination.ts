import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseDestination
/** 
 * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
**/
export class KinesisFirehoseDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryStreamArn" })
  deliveryStreamArn?: string;

  @Metadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;
}
