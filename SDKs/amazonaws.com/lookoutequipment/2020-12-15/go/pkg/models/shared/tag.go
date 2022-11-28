package shared

// Tag
// A tag is a key-value pair that can be added to a resource as metadata.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
