import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNotificationsJson200ApplicationJsonNotificationsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badge_id" })
  badgeId?: number;

  @SpeakeasyMetadata({ data: "json, name=badge_name" })
  badgeName?: string;

  @SpeakeasyMetadata({ data: "json, name=badge_slug" })
  badgeSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=badge_title" })
  badgeTitle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class GetNotificationsJson200ApplicationJsonNotifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetNotificationsJson200ApplicationJsonNotificationsData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=notification_type" })
  notificationType?: number;

  @SpeakeasyMetadata({ data: "json, name=post_number" })
  postNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=topic_id" })
  topicId?: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetNotificationsJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_more_notifications" })
  loadMoreNotifications?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: GetNotificationsJson200ApplicationJsonNotifications })
  notifications?: GetNotificationsJson200ApplicationJsonNotifications[];

  @SpeakeasyMetadata({ data: "json, name=seen_notification_id" })
  seenNotificationId?: number;

  @SpeakeasyMetadata({ data: "json, name=total_rows_notifications" })
  totalRowsNotifications?: number;
}


export class GetNotificationsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getNotificationsJson200ApplicationJsonObject?: GetNotificationsJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
