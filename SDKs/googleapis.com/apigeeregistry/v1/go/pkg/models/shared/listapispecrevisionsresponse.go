package shared

type ListAPISpecRevisionsResponse struct {
	APISpecs      []APISpec `json:"apiSpecs,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
