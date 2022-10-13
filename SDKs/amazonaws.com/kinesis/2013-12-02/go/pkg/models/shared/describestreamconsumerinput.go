package shared

type DescribeStreamConsumerInput struct {
	ConsumerArn  *string `json:"ConsumerARN"`
	ConsumerName *string `json:"ConsumerName"`
	StreamArn    *string `json:"StreamARN"`
}
