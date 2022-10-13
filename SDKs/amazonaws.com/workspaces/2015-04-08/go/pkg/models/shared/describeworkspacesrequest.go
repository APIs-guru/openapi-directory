package shared

type DescribeWorkspacesRequest struct {
	BundleID     *string  `json:"BundleId"`
	DirectoryID  *string  `json:"DirectoryId"`
	Limit        *int64   `json:"Limit"`
	NextToken    *string  `json:"NextToken"`
	UserName     *string  `json:"UserName"`
	WorkspaceIds []string `json:"WorkspaceIds"`
}
