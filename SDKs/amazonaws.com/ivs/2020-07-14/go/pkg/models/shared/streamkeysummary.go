package shared

type StreamKeySummary struct {
	Arn        *string           `json:"arn,omitempty"`
	ChannelArn *string           `json:"channelArn,omitempty"`
	Tags       map[string]string `json:"tags,omitempty"`
}
