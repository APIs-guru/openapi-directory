package shared

type ListTagsResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Tags          []Tag   `json:"tags"`
}
