package shared

// Parent
// Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
type Parent struct {
	ID     *string `json:"id,omitempty"`
	IsRoot *bool   `json:"isRoot,omitempty"`
	Title  *string `json:"title,omitempty"`
}
