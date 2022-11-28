import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudPubSubNotificationConfig } from "./cloudpubsubnotificationconfig";



// NotificationConfig
/** 
 * NotificationConfig defines the mechanisms to notify instance agent.
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubNotification" })
  pubsubNotification?: CloudPubSubNotificationConfig;
}
