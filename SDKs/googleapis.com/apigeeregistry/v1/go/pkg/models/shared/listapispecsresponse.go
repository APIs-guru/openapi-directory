package shared

// ListAPISpecsResponse
// Response message for ListApiSpecs.
type ListAPISpecsResponse struct {
	APISpecs      []APISpec `json:"apiSpecs,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
