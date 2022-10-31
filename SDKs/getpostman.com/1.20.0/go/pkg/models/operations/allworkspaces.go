package operations



type AllWorkspaces200ApplicationJSONWorkspaces struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type AllWorkspaces200ApplicationJSON struct {
    Workspaces []AllWorkspaces200ApplicationJSONWorkspaces `json:"workspaces,omitempty"`
    
}

type AllWorkspacesResponse struct {
    ContentType string 
    StatusCode int64 
    AllWorkspaces200ApplicationJSONObject *AllWorkspaces200ApplicationJSON 
    
}

