package shared

type GetOpsMetadataResult struct {
	Metadata   map[string]MetadataValue `json:"Metadata,omitempty"`
	NextToken  *string                  `json:"NextToken,omitempty"`
	ResourceID *string                  `json:"ResourceId,omitempty"`
}
