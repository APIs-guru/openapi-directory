package shared

// ListTagsResult
// Contains the response to a <code>ListTags</code> request.
type ListTagsResult struct {
	NextToken *string           `json:"NextToken,omitempty"`
	Tags      map[string]string `json:"Tags,omitempty"`
}
