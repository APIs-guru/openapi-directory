package shared



type HivePartitioningOptions struct {
    Mode *string `json:"mode,omitempty"`
    RequirePartitionFilter *bool `json:"requirePartitionFilter,omitempty"`
    SourceURIPrefix *string `json:"sourceUriPrefix,omitempty"`
    
}

