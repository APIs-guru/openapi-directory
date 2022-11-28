package shared

// JobNotification
// Notification configurations.
type JobNotification struct {
	Message     *Message `json:"message,omitempty"`
	PubsubTopic *string  `json:"pubsubTopic,omitempty"`
}
