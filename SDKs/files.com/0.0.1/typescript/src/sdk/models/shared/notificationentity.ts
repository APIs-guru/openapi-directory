import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NotificationEntitySendIntervalEnum {
    FiveMinutes = "five_minutes",
    FifteenMinutes = "fifteen_minutes",
    Hourly = "hourly",
    Daily = "daily"
}

export enum NotificationEntityUnsubscribedReasonEnum {
    None = "none",
    UnsubscribeLinkClicked = "unsubscribe_link_clicked",
    MailBounced = "mail_bounced",
    MailMarkedAsSpam = "mail_marked_as_spam"
}


// NotificationEntity
/** 
 * List Notifications
**/
export class NotificationEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=group_name" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=notify_on_copy" })
  notifyOnCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_user_actions" })
  notifyUserActions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=send_interval" })
  sendInterval?: NotificationEntitySendIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=suppressed_email" })
  suppressedEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unsubscribed" })
  unsubscribed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unsubscribed_reason" })
  unsubscribedReason?: NotificationEntityUnsubscribedReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
