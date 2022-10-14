package shared

type SearchTablesByLfTagsResponse struct {
	NextToken *string       `json:"NextToken,omitempty"`
	TableList []TaggedTable `json:"TableList,omitempty"`
}
