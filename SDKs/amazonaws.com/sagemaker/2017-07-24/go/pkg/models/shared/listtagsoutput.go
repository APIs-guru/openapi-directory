package shared

type ListTagsOutput struct {
	NextToken *string `json:"NextToken,omitempty"`
	Tags      []Tag   `json:"Tags,omitempty"`
}
