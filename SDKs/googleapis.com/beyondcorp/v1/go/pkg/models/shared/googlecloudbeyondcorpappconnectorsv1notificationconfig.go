package shared

// GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig
// NotificationConfig defines the mechanisms to notify instance agent.
type GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig struct {
	PubsubNotification *GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig `json:"pubsubNotification,omitempty"`
}
