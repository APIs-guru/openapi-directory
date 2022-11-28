import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationEventEnum } from "./notificationeventenum";
import { NotificationTypeEnum } from "./notificationtypeenum";
/**
 * Configurations for sending notifications.
**/
export declare class NotificationConfig extends SpeakeasyBase {
    notificationArn?: string;
    notificationEvents?: NotificationEventEnum[];
    notificationType?: NotificationTypeEnum;
}
