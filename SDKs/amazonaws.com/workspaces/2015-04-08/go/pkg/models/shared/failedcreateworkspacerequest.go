package shared

// FailedCreateWorkspaceRequest
// Describes a WorkSpace that cannot be created.
type FailedCreateWorkspaceRequest struct {
	ErrorCode        *string           `json:"ErrorCode,omitempty"`
	ErrorMessage     *string           `json:"ErrorMessage,omitempty"`
	WorkspaceRequest *WorkspaceRequest `json:"WorkspaceRequest,omitempty"`
}
