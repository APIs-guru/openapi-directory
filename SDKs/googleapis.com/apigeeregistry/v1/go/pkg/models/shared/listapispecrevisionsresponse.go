package shared

type ListAPISpecRevisionsResponse struct {
	APISpecs      []APISpec `json:"apiSpecs"`
	NextPageToken *string   `json:"nextPageToken"`
}
