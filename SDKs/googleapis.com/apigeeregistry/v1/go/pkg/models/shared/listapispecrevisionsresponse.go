package shared

// ListAPISpecRevisionsResponse
// Response message for ListApiSpecRevisionsResponse.
type ListAPISpecRevisionsResponse struct {
	APISpecs      []APISpec `json:"apiSpecs,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
