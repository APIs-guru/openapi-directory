package shared

type AwsIamUserDetails struct {
	AttachedManagedPolicies []AwsIamAttachedManagedPolicy `json:"AttachedManagedPolicies,omitempty"`
	CreateDate              *string                       `json:"CreateDate,omitempty"`
	GroupList               []string                      `json:"GroupList,omitempty"`
	Path                    *string                       `json:"Path,omitempty"`
	PermissionsBoundary     *AwsIamPermissionsBoundary    `json:"PermissionsBoundary,omitempty"`
	UserID                  *string                       `json:"UserId,omitempty"`
	UserName                *string                       `json:"UserName,omitempty"`
	UserPolicyList          []AwsIamUserPolicy            `json:"UserPolicyList,omitempty"`
}
