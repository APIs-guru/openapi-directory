package operations

type SingleWorkspacePathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type SingleWorkspaceRequest struct {
	PathParams SingleWorkspacePathParams
}

type SingleWorkspace200ApplicationJSONWorkspaceCollections struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type SingleWorkspace200ApplicationJSONWorkspaceEnvironments struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type SingleWorkspace200ApplicationJSONWorkspace struct {
	Collections  []SingleWorkspace200ApplicationJSONWorkspaceCollections  `json:"collections"`
	Description  *string                                                  `json:"description"`
	Environments []SingleWorkspace200ApplicationJSONWorkspaceEnvironments `json:"environments"`
	ID           *string                                                  `json:"id"`
	Name         *string                                                  `json:"name"`
	Type         *string                                                  `json:"type"`
}

type SingleWorkspace200ApplicationJSON struct {
	Workspace *SingleWorkspace200ApplicationJSONWorkspace `json:"workspace"`
}

type SingleWorkspace404ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type SingleWorkspace404ApplicationJSON struct {
	Error *SingleWorkspace404ApplicationJSONError `json:"error"`
}

type SingleWorkspaceResponse struct {
	ContentType                             string
	StatusCode                              int64
	SingleWorkspace200ApplicationJSONObject *SingleWorkspace200ApplicationJSON
	SingleWorkspace404ApplicationJSONObject *SingleWorkspace404ApplicationJSON
}
