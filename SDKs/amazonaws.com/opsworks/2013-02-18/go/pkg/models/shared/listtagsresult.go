package shared

type ListTagsResult struct {
	NextToken *string           `json:"NextToken"`
	Tags      map[string]string `json:"Tags"`
}
