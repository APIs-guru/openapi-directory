package shared

type StartWorkspacesResult struct {
	FailedRequests []FailedWorkspaceChangeRequest `json:"FailedRequests,omitempty"`
}
