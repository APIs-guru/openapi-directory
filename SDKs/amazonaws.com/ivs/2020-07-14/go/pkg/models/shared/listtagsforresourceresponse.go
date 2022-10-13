package shared

type ListTagsForResourceResponse struct {
	NextToken *string           `json:"nextToken"`
	Tags      map[string]string `json:"tags"`
}
