package shared

type DeregisterStreamConsumerInput struct {
	ConsumerArn  *string `json:"ConsumerARN"`
	ConsumerName *string `json:"ConsumerName"`
	StreamArn    *string `json:"StreamARN"`
}
