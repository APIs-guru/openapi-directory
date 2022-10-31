package shared

type NotificationConfig struct {
	NotificationArn    *string                 `json:"NotificationArn,omitempty"`
	NotificationEvents []NotificationEventEnum `json:"NotificationEvents,omitempty"`
	NotificationType   *NotificationTypeEnum   `json:"NotificationType,omitempty"`
}
