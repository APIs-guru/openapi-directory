import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig
/** 
 * The configuration for Pub/Sub messaging for the AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubSubscription" })
  pubsubSubscription?: string;
}
