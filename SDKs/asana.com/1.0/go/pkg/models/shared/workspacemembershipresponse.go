package shared

type WorkspaceMembershipResponse struct {
	Gid          *string               `json:"gid"`
	IsActive     *bool                 `json:"is_active"`
	IsAdmin      *bool                 `json:"is_admin"`
	IsGuest      *bool                 `json:"is_guest"`
	ResourceType *string               `json:"resource_type"`
	User         *UserCompact          `json:"user"`
	UserTaskList *UserTaskListResponse `json:"user_task_list"`
	Workspace    *WorkspaceCompact     `json:"workspace"`
}
