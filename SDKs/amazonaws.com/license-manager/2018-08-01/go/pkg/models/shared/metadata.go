package shared

// Metadata
// Describes key/value pairs.
type Metadata struct {
	Name  *string `json:"Name,omitempty"`
	Value *string `json:"Value,omitempty"`
}
