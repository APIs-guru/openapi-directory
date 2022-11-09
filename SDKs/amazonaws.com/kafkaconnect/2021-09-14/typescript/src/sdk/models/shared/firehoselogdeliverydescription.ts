import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirehoseLogDeliveryDescription
/** 
 * A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
**/
export class FirehoseLogDeliveryDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryStream" })
  deliveryStream?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
