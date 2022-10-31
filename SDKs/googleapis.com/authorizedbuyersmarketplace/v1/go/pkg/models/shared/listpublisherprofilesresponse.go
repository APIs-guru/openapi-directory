package shared



type ListPublisherProfilesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PublisherProfiles []PublisherProfile `json:"publisherProfiles,omitempty"`
    
}

