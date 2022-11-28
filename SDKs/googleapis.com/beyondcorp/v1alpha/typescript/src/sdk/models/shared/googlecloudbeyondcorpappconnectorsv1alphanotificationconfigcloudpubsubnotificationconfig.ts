import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig
/** 
 * The configuration for Pub/Sub messaging for the AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubSubscription" })
  pubsubSubscription?: string;
}
