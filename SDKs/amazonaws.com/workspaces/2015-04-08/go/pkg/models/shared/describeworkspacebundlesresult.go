package shared

type DescribeWorkspaceBundlesResult struct {
	Bundles   []WorkspaceBundle `json:"Bundles"`
	NextToken *string           `json:"NextToken"`
}
