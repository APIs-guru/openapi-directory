package shared

// Tag
// Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
