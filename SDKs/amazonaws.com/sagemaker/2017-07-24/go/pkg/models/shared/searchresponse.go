package shared

type SearchResponse struct {
	NextToken *string        `json:"NextToken"`
	Results   []SearchRecord `json:"Results"`
}
