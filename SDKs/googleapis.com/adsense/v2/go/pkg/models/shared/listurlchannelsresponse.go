package shared

type ListURLChannelsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	URLChannels   []URLChannel `json:"urlChannels,omitempty"`
}
