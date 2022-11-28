package shared

// NotificationConfiguration
// Configures Amazon SNS notifications of available or expiring work items for work teams.
type NotificationConfiguration struct {
	NotificationTopicArn *string `json:"NotificationTopicArn,omitempty"`
}
