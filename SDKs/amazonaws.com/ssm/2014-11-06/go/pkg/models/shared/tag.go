package shared

// Tag
// Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed instances, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
