package shared

// ListURLChannelsResponse
// Response definition for the url channels list rpc.
type ListURLChannelsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	URLChannels   []URLChannel `json:"urlChannels,omitempty"`
}
