package shared

type AwsIamRoleDetails struct {
	AssumeRolePolicyDocument *string                       `json:"AssumeRolePolicyDocument"`
	AttachedManagedPolicies  []AwsIamAttachedManagedPolicy `json:"AttachedManagedPolicies"`
	CreateDate               *string                       `json:"CreateDate"`
	InstanceProfileList      []AwsIamInstanceProfile       `json:"InstanceProfileList"`
	MaxSessionDuration       *int64                        `json:"MaxSessionDuration"`
	Path                     *string                       `json:"Path"`
	PermissionsBoundary      *AwsIamPermissionsBoundary    `json:"PermissionsBoundary"`
	RoleID                   *string                       `json:"RoleId"`
	RoleName                 *string                       `json:"RoleName"`
	RolePolicyList           []AwsIamRolePolicy            `json:"RolePolicyList"`
}
