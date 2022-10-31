package shared



type UserTaskListResponseOwner struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type UserTaskListResponseWorkspace struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type UserTaskListResponse struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *UserTaskListResponseOwner `json:"owner,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    Workspace *UserTaskListResponseWorkspace `json:"workspace,omitempty"`
    
}

