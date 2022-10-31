package shared



type ListCustomChannelsResponse struct {
    CustomChannels []CustomChannel `json:"customChannels,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

