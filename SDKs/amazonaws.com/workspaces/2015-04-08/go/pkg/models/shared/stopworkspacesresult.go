package shared



type StopWorkspacesResult struct {
    FailedRequests []FailedWorkspaceChangeRequest `json:"FailedRequests,omitempty"`
    
}

