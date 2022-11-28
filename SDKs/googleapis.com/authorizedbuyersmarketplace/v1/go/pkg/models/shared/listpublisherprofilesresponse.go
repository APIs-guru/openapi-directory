package shared

// ListPublisherProfilesResponse
// Response message for profiles visible to the buyer.
type ListPublisherProfilesResponse struct {
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
	PublisherProfiles []PublisherProfile `json:"publisherProfiles,omitempty"`
}
