package shared

type StreamKeySummary struct {
	Arn        *string           `json:"arn"`
	ChannelArn *string           `json:"channelArn"`
	Tags       map[string]string `json:"tags"`
}
