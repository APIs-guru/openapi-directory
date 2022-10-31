package shared

type ProjectStatusCompact struct {
	Gid          *string `json:"gid,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	Title        *string `json:"title,omitempty"`
}
