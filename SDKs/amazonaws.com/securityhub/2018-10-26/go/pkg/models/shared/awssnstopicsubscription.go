package shared

type AwsSnsTopicSubscription struct {
	Endpoint *string `json:"Endpoint"`
	Protocol *string `json:"Protocol"`
}
