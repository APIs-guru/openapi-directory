package shared



type DescribeWorkspaceBundlesRequest struct {
    BundleIds []string `json:"BundleIds,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Owner *string `json:"Owner,omitempty"`
    
}

