package shared

// ListTagsResponse
// The response from listing tags.
type ListTagsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tags          []Tag   `json:"tags,omitempty"`
}
