package shared

// AwsSnsTopicSubscription
// A wrapper type for the attributes of an Amazon SNS subscription.
type AwsSnsTopicSubscription struct {
	Endpoint *string `json:"Endpoint,omitempty"`
	Protocol *string `json:"Protocol,omitempty"`
}
