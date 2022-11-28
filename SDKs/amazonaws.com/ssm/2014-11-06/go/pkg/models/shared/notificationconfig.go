package shared

// NotificationConfig
// Configurations for sending notifications.
type NotificationConfig struct {
	NotificationArn    *string                 `json:"NotificationArn,omitempty"`
	NotificationEvents []NotificationEventEnum `json:"NotificationEvents,omitempty"`
	NotificationType   *NotificationTypeEnum   `json:"NotificationType,omitempty"`
}
