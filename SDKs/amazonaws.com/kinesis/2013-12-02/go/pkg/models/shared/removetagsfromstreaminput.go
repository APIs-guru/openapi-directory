package shared

// RemoveTagsFromStreamInput
// Represents the input for <code>RemoveTagsFromStream</code>.
type RemoveTagsFromStreamInput struct {
	StreamName string   `json:"StreamName"`
	TagKeys    []string `json:"TagKeys"`
}
