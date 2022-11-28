import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirehoseLogDelivery
/** 
 * The settings for delivering logs to Amazon Kinesis Data Firehose.
**/
export class FirehoseLogDelivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryStream" })
  deliveryStream?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}
