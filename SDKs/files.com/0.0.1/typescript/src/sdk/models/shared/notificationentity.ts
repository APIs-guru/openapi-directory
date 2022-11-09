import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NotificationEntitySendIntervalEnum {
    FiveMinutes = "five_minutes"
,    FifteenMinutes = "fifteen_minutes"
,    Hourly = "hourly"
,    Daily = "daily"
}

export enum NotificationEntityUnsubscribedReasonEnum {
    None = "none"
,    UnsubscribeLinkClicked = "unsubscribe_link_clicked"
,    MailBounced = "mail_bounced"
,    MailMarkedAsSpam = "mail_marked_as_spam"
}


// NotificationEntity
/** 
 * List Notifications
**/
export class NotificationEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=group_id" })
  groupId?: number;

  @Metadata({ data: "json, name=group_name" })
  groupName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=notify_on_copy" })
  notifyOnCopy?: boolean;

  @Metadata({ data: "json, name=notify_user_actions" })
  notifyUserActions?: boolean;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "json, name=send_interval" })
  sendInterval?: NotificationEntitySendIntervalEnum;

  @Metadata({ data: "json, name=suppressed_email" })
  suppressedEmail?: boolean;

  @Metadata({ data: "json, name=unsubscribed" })
  unsubscribed?: boolean;

  @Metadata({ data: "json, name=unsubscribed_reason" })
  unsubscribedReason?: NotificationEntityUnsubscribedReasonEnum;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
