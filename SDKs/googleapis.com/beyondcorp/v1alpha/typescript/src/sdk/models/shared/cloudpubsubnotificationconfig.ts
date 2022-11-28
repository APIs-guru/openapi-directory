import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudPubSubNotificationConfig
/** 
 * The configuration for Pub/Sub messaging for the connector.
**/
export class CloudPubSubNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubSubscription" })
  pubsubSubscription?: string;
}
