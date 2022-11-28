package shared

// UserTaskListResponseOwner
// The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
type UserTaskListResponseOwner struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// UserTaskListResponseWorkspace
// The workspace in which the user task list is located.
type UserTaskListResponseWorkspace struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type UserTaskListResponse struct {
	Gid          *string                        `json:"gid,omitempty"`
	Name         *string                        `json:"name,omitempty"`
	Owner        *UserTaskListResponseOwner     `json:"owner,omitempty"`
	ResourceType *string                        `json:"resource_type,omitempty"`
	Workspace    *UserTaskListResponseWorkspace `json:"workspace,omitempty"`
}
