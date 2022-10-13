package shared

type DescribeDocumentPermissionRequest struct {
	MaxResults     *int64                     `json:"MaxResults"`
	Name           string                     `json:"Name"`
	NextToken      *string                    `json:"NextToken"`
	PermissionType DocumentPermissionTypeEnum `json:"PermissionType"`
}
