import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirehoseLogDelivery
/** 
 * The settings for delivering logs to Amazon Kinesis Data Firehose.
**/
export class FirehoseLogDelivery extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryStream" })
  deliveryStream?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
