package shared

type CreateWorkspacesResult struct {
	FailedRequests  []FailedCreateWorkspaceRequest `json:"FailedRequests"`
	PendingRequests []Workspace                    `json:"PendingRequests"`
}
