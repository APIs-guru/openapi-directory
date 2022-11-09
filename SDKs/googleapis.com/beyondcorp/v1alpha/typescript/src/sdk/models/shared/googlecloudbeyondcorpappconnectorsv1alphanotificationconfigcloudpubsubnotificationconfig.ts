import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig
/** 
 * The configuration for Pub/Sub messaging for the AppConnector.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubSubscription" })
  pubsubSubscription?: string;
}
