package shared

type SearchResponse struct {
	NextToken *string        `json:"NextToken,omitempty"`
	Results   []SearchRecord `json:"Results,omitempty"`
}
