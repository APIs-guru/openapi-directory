package shared

type CreateWorkspacesResult struct {
	FailedRequests  []FailedCreateWorkspaceRequest `json:"FailedRequests,omitempty"`
	PendingRequests []Workspace                    `json:"PendingRequests,omitempty"`
}
