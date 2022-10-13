package shared

type ListCustomChannelsResponse struct {
	CustomChannels []CustomChannel `json:"customChannels"`
	NextPageToken  *string         `json:"nextPageToken"`
}
