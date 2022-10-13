package shared

type ListTagsForResourceResponse struct {
	NextToken *string `json:"nextToken"`
	Tags      []Tag   `json:"tags"`
}
