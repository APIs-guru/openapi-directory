package shared



type DescribeWorkspaceBundlesResult struct {
    Bundles []WorkspaceBundle `json:"Bundles,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

