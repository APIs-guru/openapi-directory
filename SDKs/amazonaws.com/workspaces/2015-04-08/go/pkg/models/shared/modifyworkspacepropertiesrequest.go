package shared

type ModifyWorkspacePropertiesRequest struct {
	WorkspaceID         string              `json:"WorkspaceId"`
	WorkspaceProperties WorkspaceProperties `json:"WorkspaceProperties"`
}
