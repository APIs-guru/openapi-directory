package shared



type ModifyWorkspaceAccessPropertiesRequest struct {
    ResourceID string `json:"ResourceId"`
    WorkspaceAccessProperties WorkspaceAccessProperties `json:"WorkspaceAccessProperties"`
    
}

