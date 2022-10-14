package shared

type AwsIamPermissionsBoundary struct {
	PermissionsBoundaryArn  *string `json:"PermissionsBoundaryArn,omitempty"`
	PermissionsBoundaryType *string `json:"PermissionsBoundaryType,omitempty"`
}
