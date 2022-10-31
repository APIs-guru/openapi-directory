package shared



type TerminateWorkspacesResult struct {
    FailedRequests []FailedWorkspaceChangeRequest `json:"FailedRequests,omitempty"`
    
}

