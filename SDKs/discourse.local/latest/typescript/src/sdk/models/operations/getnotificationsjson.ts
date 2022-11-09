import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNotificationsJson200ApplicationJsonNotificationsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=badge_id" })
  badgeId?: number;

  @Metadata({ data: "json, name=badge_name" })
  badgeName?: string;

  @Metadata({ data: "json, name=badge_slug" })
  badgeSlug?: string;

  @Metadata({ data: "json, name=badge_title" })
  badgeTitle?: boolean;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetNotificationsJson200ApplicationJsonNotifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=data" })
  data?: GetNotificationsJson200ApplicationJsonNotificationsData;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=notification_type" })
  notificationType?: number;

  @Metadata({ data: "json, name=post_number" })
  postNumber?: string;

  @Metadata({ data: "json, name=read" })
  read?: boolean;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=topic_id" })
  topicId?: number;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetNotificationsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_more_notifications" })
  loadMoreNotifications?: string;

  @Metadata({ data: "json, name=notifications", elemType: operations.GetNotificationsJson200ApplicationJsonNotifications })
  notifications?: GetNotificationsJson200ApplicationJsonNotifications[];

  @Metadata({ data: "json, name=seen_notification_id" })
  seenNotificationId?: number;

  @Metadata({ data: "json, name=total_rows_notifications" })
  totalRowsNotifications?: number;
}


export class GetNotificationsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNotificationsJson200ApplicationJsonObject?: GetNotificationsJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
