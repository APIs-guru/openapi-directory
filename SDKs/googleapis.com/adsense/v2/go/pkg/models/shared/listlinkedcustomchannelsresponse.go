package shared

type ListLinkedCustomChannelsResponse struct {
	CustomChannels []CustomChannel `json:"customChannels"`
	NextPageToken  *string         `json:"nextPageToken"`
}
