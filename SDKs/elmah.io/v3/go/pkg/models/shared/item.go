package shared

// Item
// Represents a key value pair.
type Item struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
