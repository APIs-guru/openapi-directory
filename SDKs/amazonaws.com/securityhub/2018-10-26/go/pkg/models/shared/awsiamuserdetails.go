package shared

type AwsIamUserDetails struct {
	AttachedManagedPolicies []AwsIamAttachedManagedPolicy `json:"AttachedManagedPolicies"`
	CreateDate              *string                       `json:"CreateDate"`
	GroupList               []string                      `json:"GroupList"`
	Path                    *string                       `json:"Path"`
	PermissionsBoundary     *AwsIamPermissionsBoundary    `json:"PermissionsBoundary"`
	UserID                  *string                       `json:"UserId"`
	UserName                *string                       `json:"UserName"`
	UserPolicyList          []AwsIamUserPolicy            `json:"UserPolicyList"`
}
