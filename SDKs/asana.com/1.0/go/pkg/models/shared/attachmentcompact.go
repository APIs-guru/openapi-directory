package shared

type AttachmentCompact struct {
	Gid             *string      `json:"gid,omitempty"`
	Name            *string      `json:"name,omitempty"`
	ResourceSubtype *interface{} `json:"resource_subtype,omitempty"`
	ResourceType    *string      `json:"resource_type,omitempty"`
}
