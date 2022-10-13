package operations

type DeleteWorkspacePathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type DeleteWorkspaceRequest struct {
	PathParams DeleteWorkspacePathParams
}

type DeleteWorkspace200ApplicationJSONWorkspace struct {
	ID *string `json:"id"`
}

type DeleteWorkspace200ApplicationJSON struct {
	Workspace *DeleteWorkspace200ApplicationJSONWorkspace `json:"workspace"`
}

type DeleteWorkspaceResponse struct {
	ContentType                             string
	StatusCode                              int64
	DeleteWorkspace200ApplicationJSONObject *DeleteWorkspace200ApplicationJSON
}
