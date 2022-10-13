package shared

type ListTagsForResourceResponse struct {
	Arn       *string `json:"Arn"`
	NextToken *string `json:"NextToken"`
	Tags      []Tag   `json:"Tags"`
}
