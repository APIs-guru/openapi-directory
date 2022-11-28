package shared

// SnsDestination
// An object that contains information about an event destination that sends data to Amazon SNS.
type SnsDestination struct {
	TopicArn *string `json:"TopicArn,omitempty"`
}
