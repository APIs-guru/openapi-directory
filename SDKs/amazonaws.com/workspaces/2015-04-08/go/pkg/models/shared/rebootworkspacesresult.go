package shared

type RebootWorkspacesResult struct {
	FailedRequests []FailedWorkspaceChangeRequest `json:"FailedRequests"`
}
