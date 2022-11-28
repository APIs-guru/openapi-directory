package shared

// Tag
// Metadata assigned to an allocation. Each tag is made up of a key and a value.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
