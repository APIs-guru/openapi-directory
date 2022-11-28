package shared

// StreamKeySummary
// Summary information about a stream key.
type StreamKeySummary struct {
	Arn        *string           `json:"arn,omitempty"`
	ChannelArn *string           `json:"channelArn,omitempty"`
	Tags       map[string]string `json:"tags,omitempty"`
}
