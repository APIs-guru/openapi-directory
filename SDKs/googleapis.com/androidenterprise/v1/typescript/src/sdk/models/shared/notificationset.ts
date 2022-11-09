import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";


// NotificationSet
/** 
 * A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
**/
export class NotificationSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=notification", elemType: shared.Notification })
  notification?: Notification[];

  @Metadata({ data: "json, name=notificationSetId" })
  notificationSetId?: string;
}
