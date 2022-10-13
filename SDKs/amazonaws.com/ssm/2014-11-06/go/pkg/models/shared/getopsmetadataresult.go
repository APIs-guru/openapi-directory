package shared

type GetOpsMetadataResult struct {
	Metadata   map[string]MetadataValue `json:"Metadata"`
	NextToken  *string                  `json:"NextToken"`
	ResourceID *string                  `json:"ResourceId"`
}
