import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationEntitySendIntervalEnum {
    FiveMinutes = "five_minutes",
    FifteenMinutes = "fifteen_minutes",
    Hourly = "hourly",
    Daily = "daily"
}
export declare enum NotificationEntityUnsubscribedReasonEnum {
    None = "none",
    UnsubscribeLinkClicked = "unsubscribe_link_clicked",
    MailBounced = "mail_bounced",
    MailMarkedAsSpam = "mail_marked_as_spam"
}
/**
 * List Notifications
**/
export declare class NotificationEntity extends SpeakeasyBase {
    groupId?: number;
    groupName?: string;
    id?: number;
    notifyOnCopy?: boolean;
    notifyUserActions?: boolean;
    path?: string;
    recursive?: boolean;
    sendInterval?: NotificationEntitySendIntervalEnum;
    suppressedEmail?: boolean;
    unsubscribed?: boolean;
    unsubscribedReason?: NotificationEntityUnsubscribedReasonEnum;
    userId?: number;
    username?: string;
}
