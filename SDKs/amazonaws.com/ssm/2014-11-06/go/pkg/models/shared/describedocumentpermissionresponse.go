package shared

type DescribeDocumentPermissionResponse struct {
	AccountIds             []string             `json:"AccountIds"`
	AccountSharingInfoList []AccountSharingInfo `json:"AccountSharingInfoList"`
	NextToken              *string              `json:"NextToken"`
}
