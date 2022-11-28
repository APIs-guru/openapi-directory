package shared

// AwsIamGroupDetails
// Contains details about an IAM group.
type AwsIamGroupDetails struct {
	AttachedManagedPolicies []AwsIamAttachedManagedPolicy `json:"AttachedManagedPolicies,omitempty"`
	CreateDate              *string                       `json:"CreateDate,omitempty"`
	GroupID                 *string                       `json:"GroupId,omitempty"`
	GroupName               *string                       `json:"GroupName,omitempty"`
	GroupPolicyList         []AwsIamGroupPolicy           `json:"GroupPolicyList,omitempty"`
	Path                    *string                       `json:"Path,omitempty"`
}
