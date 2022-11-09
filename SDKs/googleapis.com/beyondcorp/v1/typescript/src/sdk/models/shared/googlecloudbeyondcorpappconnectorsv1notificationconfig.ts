import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig } from "./googlecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig";


// GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig
/** 
 * NotificationConfig defines the mechanisms to notify instance agent.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubNotification" })
  pubsubNotification?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig;
}
