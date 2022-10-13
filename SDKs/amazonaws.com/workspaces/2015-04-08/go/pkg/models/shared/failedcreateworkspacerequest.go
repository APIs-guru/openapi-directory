package shared

type FailedCreateWorkspaceRequest struct {
	ErrorCode        *string           `json:"ErrorCode"`
	ErrorMessage     *string           `json:"ErrorMessage"`
	WorkspaceRequest *WorkspaceRequest `json:"WorkspaceRequest"`
}
