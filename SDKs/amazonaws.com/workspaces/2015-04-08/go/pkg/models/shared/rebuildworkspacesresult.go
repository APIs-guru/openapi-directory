package shared

type RebuildWorkspacesResult struct {
	FailedRequests []FailedWorkspaceChangeRequest `json:"FailedRequests"`
}
