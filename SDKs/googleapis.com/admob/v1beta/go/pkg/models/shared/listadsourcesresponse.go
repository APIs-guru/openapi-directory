package shared

// ListAdSourcesResponse
// Response for the ListAdSourcesRequest.
type ListAdSourcesResponse struct {
	AdSources     []AdSource `json:"adSources,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
