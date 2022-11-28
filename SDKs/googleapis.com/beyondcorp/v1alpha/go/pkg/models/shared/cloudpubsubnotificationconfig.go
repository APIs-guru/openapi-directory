package shared

// CloudPubSubNotificationConfig
// The configuration for Pub/Sub messaging for the connector.
type CloudPubSubNotificationConfig struct {
	PubsubSubscription *string `json:"pubsubSubscription,omitempty"`
}
