package shared

// NotificationTargetItem
// The SNS targets that are notified when updates are made to an incident.
type NotificationTargetItem struct {
	SnsTopicArn *string `json:"snsTopicArn,omitempty"`
}
