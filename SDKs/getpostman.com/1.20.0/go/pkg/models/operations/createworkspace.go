package operations



type CreateWorkspaceRequestBodyWorkspaceCollections struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type CreateWorkspaceRequestBodyWorkspaceEnvironments struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type CreateWorkspaceRequestBodyWorkspaceMocks struct {
    ID *string `json:"id,omitempty"`
    
}

type CreateWorkspaceRequestBodyWorkspaceMonitors struct {
    ID *string `json:"id,omitempty"`
    
}

type CreateWorkspaceRequestBodyWorkspace struct {
    Collections []CreateWorkspaceRequestBodyWorkspaceCollections `json:"collections,omitempty"`
    Description *string `json:"description,omitempty"`
    Environments []CreateWorkspaceRequestBodyWorkspaceEnvironments `json:"environments,omitempty"`
    Mocks []CreateWorkspaceRequestBodyWorkspaceMocks `json:"mocks,omitempty"`
    Monitors []CreateWorkspaceRequestBodyWorkspaceMonitors `json:"monitors,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type CreateWorkspaceRequestBody struct {
    Workspace *CreateWorkspaceRequestBodyWorkspace `json:"workspace,omitempty"`
    
}

type CreateWorkspaceRequest struct {
    Request *CreateWorkspaceRequestBody `request:"mediaType=application/json"`
    
}

type CreateWorkspace200ApplicationJSONWorkspace struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type CreateWorkspace200ApplicationJSON struct {
    Workspace *CreateWorkspace200ApplicationJSONWorkspace `json:"workspace,omitempty"`
    
}

type CreateWorkspace400ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type CreateWorkspace400ApplicationJSON struct {
    Error *CreateWorkspace400ApplicationJSONError `json:"error,omitempty"`
    
}

type CreateWorkspaceResponse struct {
    ContentType string 
    StatusCode int64 
    CreateWorkspace200ApplicationJSONObject *CreateWorkspace200ApplicationJSON 
    CreateWorkspace400ApplicationJSONObject *CreateWorkspace400ApplicationJSON 
    
}

