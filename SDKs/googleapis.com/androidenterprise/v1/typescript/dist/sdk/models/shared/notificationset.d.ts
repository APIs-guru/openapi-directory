import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
**/
export declare class NotificationSet extends SpeakeasyBase {
    notification?: Notification[];
    notificationSetId?: string;
}
