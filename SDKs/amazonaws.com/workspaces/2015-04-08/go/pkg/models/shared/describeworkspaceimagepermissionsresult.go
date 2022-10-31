package shared



type DescribeWorkspaceImagePermissionsResult struct {
    ImageID *string `json:"ImageId,omitempty"`
    ImagePermissions []ImagePermission `json:"ImagePermissions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

