package shared

// OpsMetadataFilter
// A filter to limit the number of OpsMetadata objects displayed.
type OpsMetadataFilter struct {
	Key    string   `json:"Key"`
	Values []string `json:"Values"`
}
