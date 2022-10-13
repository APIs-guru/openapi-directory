package shared

type ModifyWorkspaceStateRequest struct {
	WorkspaceID    string                   `json:"WorkspaceId"`
	WorkspaceState TargetWorkspaceStateEnum `json:"WorkspaceState"`
}
