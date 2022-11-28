import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1alphanotificationconfigcloudpubsubnotificationconfig";



// GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig
/** 
 * NotificationConfig defines the mechanisms to notify instance agent.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubNotification" })
  pubsubNotification?: GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig;
}
