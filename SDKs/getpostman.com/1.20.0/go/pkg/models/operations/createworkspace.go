package operations

type CreateWorkspaceRequestBodyWorkspaceCollections struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type CreateWorkspaceRequestBodyWorkspaceEnvironments struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type CreateWorkspaceRequestBodyWorkspaceMocks struct {
	ID *string `json:"id"`
}

type CreateWorkspaceRequestBodyWorkspaceMonitors struct {
	ID *string `json:"id"`
}

type CreateWorkspaceRequestBodyWorkspace struct {
	Collections  []CreateWorkspaceRequestBodyWorkspaceCollections  `json:"collections"`
	Description  *string                                           `json:"description"`
	Environments []CreateWorkspaceRequestBodyWorkspaceEnvironments `json:"environments"`
	Mocks        []CreateWorkspaceRequestBodyWorkspaceMocks        `json:"mocks"`
	Monitors     []CreateWorkspaceRequestBodyWorkspaceMonitors     `json:"monitors"`
	Name         *string                                           `json:"name"`
	Type         *string                                           `json:"type"`
}

type CreateWorkspaceRequestBody struct {
	Workspace *CreateWorkspaceRequestBodyWorkspace `json:"workspace"`
}

type CreateWorkspaceRequest struct {
	Request *CreateWorkspaceRequestBody `request:"mediaType=application/json"`
}

type CreateWorkspace200ApplicationJSONWorkspace struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type CreateWorkspace200ApplicationJSON struct {
	Workspace *CreateWorkspace200ApplicationJSONWorkspace `json:"workspace"`
}

type CreateWorkspace400ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type CreateWorkspace400ApplicationJSON struct {
	Error *CreateWorkspace400ApplicationJSONError `json:"error"`
}

type CreateWorkspaceResponse struct {
	ContentType                             string
	StatusCode                              int64
	CreateWorkspace200ApplicationJSONObject *CreateWorkspace200ApplicationJSON
	CreateWorkspace400ApplicationJSONObject *CreateWorkspace400ApplicationJSON
}
