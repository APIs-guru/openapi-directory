package shared



type DescribeDocumentPermissionResponse struct {
    AccountIds []string `json:"AccountIds,omitempty"`
    AccountSharingInfoList []AccountSharingInfo `json:"AccountSharingInfoList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

