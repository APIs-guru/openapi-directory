package shared

type ListAdSourcesResponse struct {
	AdSources     []AdSource `json:"adSources"`
	NextPageToken *string    `json:"nextPageToken"`
}
