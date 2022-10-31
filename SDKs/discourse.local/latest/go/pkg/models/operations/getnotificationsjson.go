package operations



type GetNotificationsJSON200ApplicationJSONNotificationsData struct {
    BadgeID *int64 `json:"badge_id,omitempty"`
    BadgeName *string `json:"badge_name,omitempty"`
    BadgeSlug *string `json:"badge_slug,omitempty"`
    BadgeTitle *bool `json:"badge_title,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type GetNotificationsJSON200ApplicationJSONNotifications struct {
    CreatedAt *string `json:"created_at,omitempty"`
    Data *GetNotificationsJSON200ApplicationJSONNotificationsData `json:"data,omitempty"`
    ID *int64 `json:"id,omitempty"`
    NotificationType *int64 `json:"notification_type,omitempty"`
    PostNumber *string `json:"post_number,omitempty"`
    Read *bool `json:"read,omitempty"`
    Slug *string `json:"slug,omitempty"`
    TopicID *int64 `json:"topic_id,omitempty"`
    UserID *int64 `json:"user_id,omitempty"`
    
}

type GetNotificationsJSON200ApplicationJSON struct {
    LoadMoreNotifications *string `json:"load_more_notifications,omitempty"`
    Notifications []GetNotificationsJSON200ApplicationJSONNotifications `json:"notifications,omitempty"`
    SeenNotificationID *int64 `json:"seen_notification_id,omitempty"`
    TotalRowsNotifications *int64 `json:"total_rows_notifications,omitempty"`
    
}

type GetNotificationsJSONResponse struct {
    ContentType string 
    GetNotificationsJSON200ApplicationJSONObject *GetNotificationsJSON200ApplicationJSON 
    StatusCode int64 
    
}

