package shared

type NotificationConfig struct {
	NotificationArn    *string                 `json:"NotificationArn"`
	NotificationEvents []NotificationEventEnum `json:"NotificationEvents"`
	NotificationType   *NotificationTypeEnum   `json:"NotificationType"`
}
