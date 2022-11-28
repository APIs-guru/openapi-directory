import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig";



// GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig
/** 
 * NotificationConfig defines the mechanisms to notify instance agent.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubNotification" })
  pubsubNotification?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig;
}
