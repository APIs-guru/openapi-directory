package shared



type DescribeWorkspacesResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Workspaces []Workspace `json:"Workspaces,omitempty"`
    
}

