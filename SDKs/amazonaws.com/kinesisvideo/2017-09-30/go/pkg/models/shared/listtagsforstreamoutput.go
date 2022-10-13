package shared

type ListTagsForStreamOutput struct {
	NextToken *string           `json:"NextToken"`
	Tags      map[string]string `json:"Tags"`
}
