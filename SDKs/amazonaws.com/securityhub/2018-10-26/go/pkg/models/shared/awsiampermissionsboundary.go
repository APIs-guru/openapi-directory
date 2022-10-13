package shared

type AwsIamPermissionsBoundary struct {
	PermissionsBoundaryArn  *string `json:"PermissionsBoundaryArn"`
	PermissionsBoundaryType *string `json:"PermissionsBoundaryType"`
}
