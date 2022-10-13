package operations

type GetNotificationsJSON200ApplicationJSONNotificationsData struct {
	BadgeID    *int64  `json:"badge_id"`
	BadgeName  *string `json:"badge_name"`
	BadgeSlug  *string `json:"badge_slug"`
	BadgeTitle *bool   `json:"badge_title"`
	Username   *string `json:"username"`
}

type GetNotificationsJSON200ApplicationJSONNotifications struct {
	CreatedAt        *string                                                  `json:"created_at"`
	Data             *GetNotificationsJSON200ApplicationJSONNotificationsData `json:"data"`
	ID               *int64                                                   `json:"id"`
	NotificationType *int64                                                   `json:"notification_type"`
	PostNumber       *string                                                  `json:"post_number"`
	Read             *bool                                                    `json:"read"`
	Slug             *string                                                  `json:"slug"`
	TopicID          *int64                                                   `json:"topic_id"`
	UserID           *int64                                                   `json:"user_id"`
}

type GetNotificationsJSON200ApplicationJSON struct {
	LoadMoreNotifications  *string                                               `json:"load_more_notifications"`
	Notifications          []GetNotificationsJSON200ApplicationJSONNotifications `json:"notifications"`
	SeenNotificationID     *int64                                                `json:"seen_notification_id"`
	TotalRowsNotifications *int64                                                `json:"total_rows_notifications"`
}

type GetNotificationsJSONResponse struct {
	ContentType                                  string
	GetNotificationsJSON200ApplicationJSONObject *GetNotificationsJSON200ApplicationJSON
	StatusCode                                   int64
}
