package shared

type ListTagsOutput struct {
	NextToken *string `json:"NextToken"`
	Tags      []Tag   `json:"Tags"`
}
