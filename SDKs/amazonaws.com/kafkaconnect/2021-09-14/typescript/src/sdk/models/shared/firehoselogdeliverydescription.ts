import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirehoseLogDeliveryDescription
/** 
 * A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
**/
export class FirehoseLogDeliveryDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryStream" })
  deliveryStream?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
