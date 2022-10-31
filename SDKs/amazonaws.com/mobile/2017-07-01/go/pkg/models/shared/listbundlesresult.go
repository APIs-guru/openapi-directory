package shared



type ListBundlesResult struct {
    BundleList []BundleDetails `json:"bundleList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

