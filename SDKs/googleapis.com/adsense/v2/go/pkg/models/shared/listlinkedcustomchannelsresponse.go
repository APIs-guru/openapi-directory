package shared

type ListLinkedCustomChannelsResponse struct {
	CustomChannels []CustomChannel `json:"customChannels,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
