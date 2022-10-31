package shared

type ListChannelsResponse struct {
	Channels  []ChannelSummary `json:"channels"`
	NextToken *string          `json:"nextToken,omitempty"`
}
