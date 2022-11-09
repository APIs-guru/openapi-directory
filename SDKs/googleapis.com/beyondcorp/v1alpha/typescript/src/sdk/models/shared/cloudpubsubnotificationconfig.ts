import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudPubSubNotificationConfig
/** 
 * The configuration for Pub/Sub messaging for the connector.
**/
export class CloudPubSubNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubSubscription" })
  pubsubSubscription?: string;
}
