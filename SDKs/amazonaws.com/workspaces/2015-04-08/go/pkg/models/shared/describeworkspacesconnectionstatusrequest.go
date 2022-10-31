package shared



type DescribeWorkspacesConnectionStatusRequest struct {
    NextToken *string `json:"NextToken,omitempty"`
    WorkspaceIds []string `json:"WorkspaceIds,omitempty"`
    
}

