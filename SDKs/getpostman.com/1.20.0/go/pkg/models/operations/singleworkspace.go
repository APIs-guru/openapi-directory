package operations



type SingleWorkspacePathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type SingleWorkspaceRequest struct {
    PathParams SingleWorkspacePathParams 
    
}

type SingleWorkspace200ApplicationJSONWorkspaceCollections struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type SingleWorkspace200ApplicationJSONWorkspaceEnvironments struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type SingleWorkspace200ApplicationJSONWorkspace struct {
    Collections []SingleWorkspace200ApplicationJSONWorkspaceCollections `json:"collections,omitempty"`
    Description *string `json:"description,omitempty"`
    Environments []SingleWorkspace200ApplicationJSONWorkspaceEnvironments `json:"environments,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type SingleWorkspace200ApplicationJSON struct {
    Workspace *SingleWorkspace200ApplicationJSONWorkspace `json:"workspace,omitempty"`
    
}

type SingleWorkspace404ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type SingleWorkspace404ApplicationJSON struct {
    Error *SingleWorkspace404ApplicationJSONError `json:"error,omitempty"`
    
}

type SingleWorkspaceResponse struct {
    ContentType string 
    StatusCode int64 
    SingleWorkspace200ApplicationJSONObject *SingleWorkspace200ApplicationJSON 
    SingleWorkspace404ApplicationJSONObject *SingleWorkspace404ApplicationJSON 
    
}

