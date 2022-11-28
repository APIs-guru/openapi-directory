package shared

// ListBundlesResult
//
//	Result structure contains a list of all available bundles with details.
type ListBundlesResult struct {
	BundleList []BundleDetails `json:"bundleList,omitempty"`
	NextToken  *string         `json:"nextToken,omitempty"`
}
