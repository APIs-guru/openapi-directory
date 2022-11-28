package shared

// ListTagsForStreamOutput
// Represents the output for <code>ListTagsForStream</code>.
type ListTagsForStreamOutput struct {
	HasMoreTags bool  `json:"HasMoreTags"`
	Tags        []Tag `json:"Tags"`
}
