package shared

// Tag
// A custom key-value pair that's associated with a resource.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
