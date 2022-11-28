package shared

// Notification
// Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications).
type Notification struct {
	CloudPubsubTopic *CloudPubsubTopic `json:"cloudPubsubTopic,omitempty"`
}
