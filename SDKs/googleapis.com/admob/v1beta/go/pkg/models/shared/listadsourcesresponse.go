package shared

type ListAdSourcesResponse struct {
	AdSources     []AdSource `json:"adSources,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
