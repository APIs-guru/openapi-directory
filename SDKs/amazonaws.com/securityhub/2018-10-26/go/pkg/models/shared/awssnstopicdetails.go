package shared

// AwsSnsTopicDetails
// A wrapper type for the topic's ARN.
type AwsSnsTopicDetails struct {
	KmsMasterKeyID *string                   `json:"KmsMasterKeyId,omitempty"`
	Owner          *string                   `json:"Owner,omitempty"`
	Subscription   []AwsSnsTopicSubscription `json:"Subscription,omitempty"`
	TopicName      *string                   `json:"TopicName,omitempty"`
}
