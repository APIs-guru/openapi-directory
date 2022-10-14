package shared

type DescribeWorkspacesRequest struct {
	BundleID     *string  `json:"BundleId,omitempty"`
	DirectoryID  *string  `json:"DirectoryId,omitempty"`
	Limit        *int64   `json:"Limit,omitempty"`
	NextToken    *string  `json:"NextToken,omitempty"`
	UserName     *string  `json:"UserName,omitempty"`
	WorkspaceIds []string `json:"WorkspaceIds,omitempty"`
}
