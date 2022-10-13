package shared

type AwsSnsTopicDetails struct {
	KmsMasterKeyID *string                   `json:"KmsMasterKeyId"`
	Owner          *string                   `json:"Owner"`
	Subscription   []AwsSnsTopicSubscription `json:"Subscription"`
	TopicName      *string                   `json:"TopicName"`
}
