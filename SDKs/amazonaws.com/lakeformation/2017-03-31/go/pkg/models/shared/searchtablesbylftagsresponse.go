package shared

type SearchTablesByLfTagsResponse struct {
	NextToken *string       `json:"NextToken"`
	TableList []TaggedTable `json:"TableList"`
}
