package shared

type FailedCreateWorkspaceRequest struct {
	ErrorCode        *string           `json:"ErrorCode,omitempty"`
	ErrorMessage     *string           `json:"ErrorMessage,omitempty"`
	WorkspaceRequest *WorkspaceRequest `json:"WorkspaceRequest,omitempty"`
}
