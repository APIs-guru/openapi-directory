package operations



type UpdateWorkspacePathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}

type UpdateWorkspaceRequestBodyWorkspaceCollections struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type UpdateWorkspaceRequestBodyWorkspaceEnvironments struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type UpdateWorkspaceRequestBodyWorkspaceMocks struct {
    ID *string `json:"id,omitempty"`
    
}

type UpdateWorkspaceRequestBodyWorkspaceMonitors struct {
    ID *string `json:"id,omitempty"`
    
}

type UpdateWorkspaceRequestBodyWorkspace struct {
    Collections []UpdateWorkspaceRequestBodyWorkspaceCollections `json:"collections,omitempty"`
    Description *string `json:"description,omitempty"`
    Environments []UpdateWorkspaceRequestBodyWorkspaceEnvironments `json:"environments,omitempty"`
    Mocks []UpdateWorkspaceRequestBodyWorkspaceMocks `json:"mocks,omitempty"`
    Monitors []UpdateWorkspaceRequestBodyWorkspaceMonitors `json:"monitors,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateWorkspaceRequestBody struct {
    Workspace *UpdateWorkspaceRequestBodyWorkspace `json:"workspace,omitempty"`
    
}

type UpdateWorkspaceRequest struct {
    PathParams UpdateWorkspacePathParams 
    Request *UpdateWorkspaceRequestBody `request:"mediaType=application/json"`
    
}

type UpdateWorkspace200ApplicationJSONWorkspace struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateWorkspace200ApplicationJSON struct {
    Workspace *UpdateWorkspace200ApplicationJSONWorkspace `json:"workspace,omitempty"`
    
}

type UpdateWorkspace403ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateWorkspace403ApplicationJSON struct {
    Error *UpdateWorkspace403ApplicationJSONError `json:"error,omitempty"`
    
}

type UpdateWorkspace404ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateWorkspace404ApplicationJSON struct {
    Error *UpdateWorkspace404ApplicationJSONError `json:"error,omitempty"`
    
}

type UpdateWorkspaceResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateWorkspace200ApplicationJSONObject *UpdateWorkspace200ApplicationJSON 
    UpdateWorkspace403ApplicationJSONObject *UpdateWorkspace403ApplicationJSON 
    UpdateWorkspace404ApplicationJSONObject *UpdateWorkspace404ApplicationJSON 
    
}

