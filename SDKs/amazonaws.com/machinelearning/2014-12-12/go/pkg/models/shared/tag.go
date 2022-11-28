package shared

// Tag
// A custom key-value pair associated with an ML object, such as an ML model.
type Tag struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
