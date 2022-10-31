package shared

type AwsIamRoleDetails struct {
	AssumeRolePolicyDocument *string                       `json:"AssumeRolePolicyDocument,omitempty"`
	AttachedManagedPolicies  []AwsIamAttachedManagedPolicy `json:"AttachedManagedPolicies,omitempty"`
	CreateDate               *string                       `json:"CreateDate,omitempty"`
	InstanceProfileList      []AwsIamInstanceProfile       `json:"InstanceProfileList,omitempty"`
	MaxSessionDuration       *int64                        `json:"MaxSessionDuration,omitempty"`
	Path                     *string                       `json:"Path,omitempty"`
	PermissionsBoundary      *AwsIamPermissionsBoundary    `json:"PermissionsBoundary,omitempty"`
	RoleID                   *string                       `json:"RoleId,omitempty"`
	RoleName                 *string                       `json:"RoleName,omitempty"`
	RolePolicyList           []AwsIamRolePolicy            `json:"RolePolicyList,omitempty"`
}
