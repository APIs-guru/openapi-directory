package shared

// Tag
// Key/value pair that can be assigned to an application.
type Tag struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
