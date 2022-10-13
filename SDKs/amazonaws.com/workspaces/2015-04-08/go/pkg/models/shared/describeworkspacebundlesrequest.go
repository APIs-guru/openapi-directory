package shared

type DescribeWorkspaceBundlesRequest struct {
	BundleIds []string `json:"BundleIds"`
	NextToken *string  `json:"NextToken"`
	Owner     *string  `json:"Owner"`
}
