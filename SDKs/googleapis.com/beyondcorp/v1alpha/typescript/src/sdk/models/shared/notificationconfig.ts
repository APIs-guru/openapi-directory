import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudPubSubNotificationConfig } from "./cloudpubsubnotificationconfig";


// NotificationConfig
/** 
 * NotificationConfig defines the mechanisms to notify instance agent.
**/
export class NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubNotification" })
  pubsubNotification?: CloudPubSubNotificationConfig;
}
