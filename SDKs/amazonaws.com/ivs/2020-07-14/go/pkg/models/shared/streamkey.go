package shared

type StreamKey struct {
	Arn        *string           `json:"arn"`
	ChannelArn *string           `json:"channelArn"`
	Tags       map[string]string `json:"tags"`
	Value      *string           `json:"value"`
}
