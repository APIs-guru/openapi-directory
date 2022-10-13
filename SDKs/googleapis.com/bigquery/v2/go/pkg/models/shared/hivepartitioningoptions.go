package shared

type HivePartitioningOptions struct {
	Mode                   *string `json:"mode"`
	RequirePartitionFilter *bool   `json:"requirePartitionFilter"`
	SourceURIPrefix        *string `json:"sourceUriPrefix"`
}
