import { SpeakeasyBase } from "../../../internal/utils";
import { CloudPubSubNotificationConfig } from "./cloudpubsubnotificationconfig";
/**
 * NotificationConfig defines the mechanisms to notify instance agent.
**/
export declare class NotificationConfig extends SpeakeasyBase {
    pubsubNotification?: CloudPubSubNotificationConfig;
}
