import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseDestination
/** 
 * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
**/
export class KinesisFirehoseDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryStreamArn" })
  deliveryStreamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRoleArn" })
  iamRoleArn?: string;
}
