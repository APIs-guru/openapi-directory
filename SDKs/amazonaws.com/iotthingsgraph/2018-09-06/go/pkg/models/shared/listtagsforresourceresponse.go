package shared

type ListTagsForResourceResponse struct {
	NextToken *string `json:"nextToken,omitempty"`
	Tags      []Tag   `json:"tags,omitempty"`
}
