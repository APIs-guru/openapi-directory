package shared

// ListCustomChannelsResponse
// Response definition for the custom channel list rpc.
type ListCustomChannelsResponse struct {
	CustomChannels []CustomChannel `json:"customChannels,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
