package shared

type DescribeWorkspaceImagePermissionsResult struct {
	ImageID          *string           `json:"ImageId"`
	ImagePermissions []ImagePermission `json:"ImagePermissions"`
	NextToken        *string           `json:"NextToken"`
}
