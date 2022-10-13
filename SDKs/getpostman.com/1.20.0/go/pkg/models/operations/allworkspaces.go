package operations

type AllWorkspaces200ApplicationJSONWorkspaces struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	Type *string `json:"type"`
}

type AllWorkspaces200ApplicationJSON struct {
	Workspaces []AllWorkspaces200ApplicationJSONWorkspaces `json:"workspaces"`
}

type AllWorkspacesResponse struct {
	ContentType                           string
	StatusCode                            int64
	AllWorkspaces200ApplicationJSONObject *AllWorkspaces200ApplicationJSON
}
