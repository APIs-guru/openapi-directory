package shared

type AwsIamPolicyVersion struct {
	CreateDate       *string `json:"CreateDate"`
	IsDefaultVersion *bool   `json:"IsDefaultVersion"`
	VersionID        *string `json:"VersionId"`
}
