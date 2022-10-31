package shared

type ProjectMembershipCompact struct {
	Gid          *string      `json:"gid,omitempty"`
	ResourceType *string      `json:"resource_type,omitempty"`
	User         *UserCompact `json:"user,omitempty"`
}
