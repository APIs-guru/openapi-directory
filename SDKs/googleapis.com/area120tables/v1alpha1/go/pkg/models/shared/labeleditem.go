package shared

// LabeledItem
// A single item in a labeled column.
type LabeledItem struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}
