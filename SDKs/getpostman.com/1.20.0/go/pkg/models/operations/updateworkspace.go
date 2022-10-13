package operations

type UpdateWorkspacePathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type UpdateWorkspaceRequestBodyWorkspaceCollections struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type UpdateWorkspaceRequestBodyWorkspaceEnvironments struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type UpdateWorkspaceRequestBodyWorkspaceMocks struct {
	ID *string `json:"id"`
}

type UpdateWorkspaceRequestBodyWorkspaceMonitors struct {
	ID *string `json:"id"`
}

type UpdateWorkspaceRequestBodyWorkspace struct {
	Collections  []UpdateWorkspaceRequestBodyWorkspaceCollections  `json:"collections"`
	Description  *string                                           `json:"description"`
	Environments []UpdateWorkspaceRequestBodyWorkspaceEnvironments `json:"environments"`
	Mocks        []UpdateWorkspaceRequestBodyWorkspaceMocks        `json:"mocks"`
	Monitors     []UpdateWorkspaceRequestBodyWorkspaceMonitors     `json:"monitors"`
	Name         *string                                           `json:"name"`
}

type UpdateWorkspaceRequestBody struct {
	Workspace *UpdateWorkspaceRequestBodyWorkspace `json:"workspace"`
}

type UpdateWorkspaceRequest struct {
	PathParams UpdateWorkspacePathParams
	Request    *UpdateWorkspaceRequestBody `request:"mediaType=application/json"`
}

type UpdateWorkspace200ApplicationJSONWorkspace struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type UpdateWorkspace200ApplicationJSON struct {
	Workspace *UpdateWorkspace200ApplicationJSONWorkspace `json:"workspace"`
}

type UpdateWorkspace403ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type UpdateWorkspace403ApplicationJSON struct {
	Error *UpdateWorkspace403ApplicationJSONError `json:"error"`
}

type UpdateWorkspace404ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type UpdateWorkspace404ApplicationJSON struct {
	Error *UpdateWorkspace404ApplicationJSONError `json:"error"`
}

type UpdateWorkspaceResponse struct {
	ContentType                             string
	StatusCode                              int64
	UpdateWorkspace200ApplicationJSONObject *UpdateWorkspace200ApplicationJSON
	UpdateWorkspace403ApplicationJSONObject *UpdateWorkspace403ApplicationJSON
	UpdateWorkspace404ApplicationJSONObject *UpdateWorkspace404ApplicationJSON
}
