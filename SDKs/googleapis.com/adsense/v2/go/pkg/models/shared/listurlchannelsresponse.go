package shared

type ListURLChannelsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	URLChannels   []URLChannel `json:"urlChannels"`
}
