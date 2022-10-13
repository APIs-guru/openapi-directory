package shared

type WorkspaceMembershipCompact struct {
	Gid          *string           `json:"gid"`
	ResourceType *string           `json:"resource_type"`
	User         *UserCompact      `json:"user"`
	Workspace    *WorkspaceCompact `json:"workspace"`
}
