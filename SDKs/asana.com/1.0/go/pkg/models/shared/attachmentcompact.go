package shared

type AttachmentCompact struct {
	Gid             *string      `json:"gid"`
	Name            *string      `json:"name"`
	ResourceSubtype *interface{} `json:"resource_subtype"`
	ResourceType    *string      `json:"resource_type"`
}
