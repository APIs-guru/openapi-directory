package shared

// Tag
// A key:value pair that adds metadata to a resource used by Amazon Transcribe. For example, a tag with the key:value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by your organization's sales department.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
