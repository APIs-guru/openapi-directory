package shared

type UserCompact struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type UserCompactInput struct {
	Name *string `json:"name,omitempty"`
}
