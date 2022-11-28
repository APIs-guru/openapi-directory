package shared

// ListTagsForStreamInput
// Represents the input for <code>ListTagsForStream</code>.
type ListTagsForStreamInput struct {
	ExclusiveStartTagKey *string `json:"ExclusiveStartTagKey,omitempty"`
	Limit                *int64  `json:"Limit,omitempty"`
	StreamName           string  `json:"StreamName"`
}
