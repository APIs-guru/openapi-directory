package shared

// AddTagsToStreamInput
// Represents the input for <code>AddTagsToStream</code>.
type AddTagsToStreamInput struct {
	StreamName string            `json:"StreamName"`
	Tags       map[string]string `json:"Tags"`
}
