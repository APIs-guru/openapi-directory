package shared



type DescribeStreamConsumerInput struct {
    ConsumerArn *string `json:"ConsumerARN,omitempty"`
    ConsumerName *string `json:"ConsumerName,omitempty"`
    StreamArn *string `json:"StreamARN,omitempty"`
    
}

