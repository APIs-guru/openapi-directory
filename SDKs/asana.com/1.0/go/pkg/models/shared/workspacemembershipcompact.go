package shared

type WorkspaceMembershipCompact struct {
	Gid          *string           `json:"gid,omitempty"`
	ResourceType *string           `json:"resource_type,omitempty"`
	User         *UserCompact      `json:"user,omitempty"`
	Workspace    *WorkspaceCompact `json:"workspace,omitempty"`
}
