package shared

type CreateOpsMetadataRequest struct {
	Metadata   map[string]MetadataValue `json:"Metadata"`
	ResourceID string                   `json:"ResourceId"`
	Tags       []Tag                    `json:"Tags"`
}
