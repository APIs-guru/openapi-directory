package shared

type DescribeDocumentPermissionRequest struct {
	MaxResults     *int64                     `json:"MaxResults,omitempty"`
	Name           string                     `json:"Name"`
	NextToken      *string                    `json:"NextToken,omitempty"`
	PermissionType DocumentPermissionTypeEnum `json:"PermissionType"`
}
