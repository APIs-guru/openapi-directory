package shared

type ListAPISpecsResponse struct {
	APISpecs      []APISpec `json:"apiSpecs"`
	NextPageToken *string   `json:"nextPageToken"`
}
