import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig
/** 
 * The configuration for Pub/Sub messaging for the AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubSubscription" })
  pubsubSubscription?: string;
}
