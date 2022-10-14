package shared

type FailedWorkspaceChangeRequest struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	WorkspaceID  *string `json:"WorkspaceId,omitempty"`
}
