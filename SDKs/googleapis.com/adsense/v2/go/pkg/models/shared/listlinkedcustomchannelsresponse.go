package shared

// ListLinkedCustomChannelsResponse
// Response definition for the custom channels linked to an adunit list rpc.
type ListLinkedCustomChannelsResponse struct {
	CustomChannels []CustomChannel `json:"customChannels,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
