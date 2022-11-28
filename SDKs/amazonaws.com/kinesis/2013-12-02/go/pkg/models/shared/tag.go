package shared

// Tag
// Metadata assigned to the stream, consisting of a key-value pair.
type Tag struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
