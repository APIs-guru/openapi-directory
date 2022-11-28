import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



// NotificationSet
/** 
 * A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
**/
export class NotificationSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification", elemType: Notification })
  notification?: Notification[];

  @SpeakeasyMetadata({ data: "json, name=notificationSetId" })
  notificationSetId?: string;
}
