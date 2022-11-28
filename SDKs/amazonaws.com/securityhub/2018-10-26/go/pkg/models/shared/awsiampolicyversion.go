package shared

// AwsIamPolicyVersion
// A version of an IAM policy.
type AwsIamPolicyVersion struct {
	CreateDate       *string `json:"CreateDate,omitempty"`
	IsDefaultVersion *bool   `json:"IsDefaultVersion,omitempty"`
	VersionID        *string `json:"VersionId,omitempty"`
}
