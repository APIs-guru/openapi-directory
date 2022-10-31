package shared

type ListTagsForResourceResponse struct {
	NextToken *string           `json:"nextToken,omitempty"`
	Tags      map[string]string `json:"tags"`
}
