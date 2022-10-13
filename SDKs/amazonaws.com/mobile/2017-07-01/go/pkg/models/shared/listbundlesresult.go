package shared

type ListBundlesResult struct {
	BundleList []BundleDetails `json:"bundleList"`
	NextToken  *string         `json:"nextToken"`
}
