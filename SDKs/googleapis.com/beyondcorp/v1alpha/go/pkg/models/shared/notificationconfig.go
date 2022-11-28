package shared

// NotificationConfig
// NotificationConfig defines the mechanisms to notify instance agent.
type NotificationConfig struct {
	PubsubNotification *CloudPubSubNotificationConfig `json:"pubsubNotification,omitempty"`
}
