package shared

type FailedWorkspaceChangeRequest struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
	WorkspaceID  *string `json:"WorkspaceId"`
}
