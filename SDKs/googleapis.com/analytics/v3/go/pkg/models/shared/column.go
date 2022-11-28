package shared

// Column
// JSON template for a metadata column.
type Column struct {
	Attributes map[string]string `json:"attributes,omitempty"`
	ID         *string           `json:"id,omitempty"`
	Kind       *string           `json:"kind,omitempty"`
}
