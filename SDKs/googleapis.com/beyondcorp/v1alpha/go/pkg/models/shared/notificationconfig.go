package shared

type NotificationConfig struct {
	PubsubNotification *CloudPubSubNotificationConfig `json:"pubsubNotification"`
}
