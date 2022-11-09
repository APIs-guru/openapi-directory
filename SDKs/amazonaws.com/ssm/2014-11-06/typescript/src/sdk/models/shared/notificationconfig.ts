import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationEventEnum } from "./notificationeventenum";
import { NotificationTypeEnum } from "./notificationtypeenum";


// NotificationConfig
/** 
 * Configurations for sending notifications.
**/
export class NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotificationArn" })
  notificationArn?: string;

  @Metadata({ data: "json, name=NotificationEvents" })
  notificationEvents?: NotificationEventEnum[];

  @Metadata({ data: "json, name=NotificationType" })
  notificationType?: NotificationTypeEnum;
}
