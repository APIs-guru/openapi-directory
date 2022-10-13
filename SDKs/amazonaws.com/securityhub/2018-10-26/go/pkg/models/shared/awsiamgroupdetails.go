package shared

type AwsIamGroupDetails struct {
	AttachedManagedPolicies []AwsIamAttachedManagedPolicy `json:"AttachedManagedPolicies"`
	CreateDate              *string                       `json:"CreateDate"`
	GroupID                 *string                       `json:"GroupId"`
	GroupName               *string                       `json:"GroupName"`
	GroupPolicyList         []AwsIamGroupPolicy           `json:"GroupPolicyList"`
	Path                    *string                       `json:"Path"`
}
