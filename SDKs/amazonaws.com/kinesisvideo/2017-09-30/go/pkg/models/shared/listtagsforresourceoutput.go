package shared

type ListTagsForResourceOutput struct {
	NextToken *string           `json:"NextToken"`
	Tags      map[string]string `json:"Tags"`
}
