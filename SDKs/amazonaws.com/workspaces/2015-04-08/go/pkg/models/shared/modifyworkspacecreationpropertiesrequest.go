package shared

type ModifyWorkspaceCreationPropertiesRequest struct {
	ResourceID                  string                      `json:"ResourceId"`
	WorkspaceCreationProperties WorkspaceCreationProperties `json:"WorkspaceCreationProperties"`
}
