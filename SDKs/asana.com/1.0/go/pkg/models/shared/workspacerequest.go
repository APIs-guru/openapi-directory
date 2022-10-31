package shared



type WorkspaceRequest struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

