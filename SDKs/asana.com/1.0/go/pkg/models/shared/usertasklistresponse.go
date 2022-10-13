package shared

type UserTaskListResponseOwner struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type UserTaskListResponseWorkspace struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type UserTaskListResponse struct {
	Gid          *string                        `json:"gid"`
	Name         *string                        `json:"name"`
	Owner        *UserTaskListResponseOwner     `json:"owner"`
	ResourceType *string                        `json:"resource_type"`
	Workspace    *UserTaskListResponseWorkspace `json:"workspace"`
}
