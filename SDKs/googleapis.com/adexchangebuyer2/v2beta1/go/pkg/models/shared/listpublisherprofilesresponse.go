package shared

type ListPublisherProfilesResponse struct {
	NextPageToken     *string            `json:"nextPageToken"`
	PublisherProfiles []PublisherProfile `json:"publisherProfiles"`
}
