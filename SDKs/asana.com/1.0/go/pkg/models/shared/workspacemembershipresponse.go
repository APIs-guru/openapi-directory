package shared

type WorkspaceMembershipResponse struct {
	Gid          *string               `json:"gid,omitempty"`
	IsActive     *bool                 `json:"is_active,omitempty"`
	IsAdmin      *bool                 `json:"is_admin,omitempty"`
	IsGuest      *bool                 `json:"is_guest,omitempty"`
	ResourceType *string               `json:"resource_type,omitempty"`
	User         *UserCompact          `json:"user,omitempty"`
	UserTaskList *UserTaskListResponse `json:"user_task_list,omitempty"`
	Workspace    *WorkspaceCompact     `json:"workspace,omitempty"`
}
