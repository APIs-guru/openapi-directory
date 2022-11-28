package shared

// AwsIamPermissionsBoundary
// Information about the policy used to set the permissions boundary for an IAM principal.
type AwsIamPermissionsBoundary struct {
	PermissionsBoundaryArn  *string `json:"PermissionsBoundaryArn,omitempty"`
	PermissionsBoundaryType *string `json:"PermissionsBoundaryType,omitempty"`
}
