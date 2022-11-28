package shared

// RecordTag
// Information about a tag, which is a key-value pair.
type RecordTag struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
