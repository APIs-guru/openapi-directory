package shared



type DescribeWorkspacesConnectionStatusResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    WorkspacesConnectionStatus []WorkspaceConnectionStatus `json:"WorkspacesConnectionStatus,omitempty"`
    
}

