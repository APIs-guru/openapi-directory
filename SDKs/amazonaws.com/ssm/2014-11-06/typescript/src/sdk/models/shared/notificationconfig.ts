import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationEventEnum } from "./notificationeventenum";
import { NotificationTypeEnum } from "./notificationtypeenum";



// NotificationConfig
/** 
 * Configurations for sending notifications.
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotificationArn" })
  notificationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationEvents" })
  notificationEvents?: NotificationEventEnum[];

  @SpeakeasyMetadata({ data: "json, name=NotificationType" })
  notificationType?: NotificationTypeEnum;
}
