package shared

type CreateOpsMetadataRequest struct {
	Metadata   map[string]MetadataValue `json:"Metadata,omitempty"`
	ResourceID string                   `json:"ResourceId"`
	Tags       []Tag                    `json:"Tags,omitempty"`
}
