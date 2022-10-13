package shared

type ProjectMembershipCompact struct {
	Gid          *string      `json:"gid"`
	ResourceType *string      `json:"resource_type"`
	User         *UserCompact `json:"user"`
}
