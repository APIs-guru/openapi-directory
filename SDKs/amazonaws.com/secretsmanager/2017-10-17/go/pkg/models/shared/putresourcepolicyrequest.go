package shared

type PutResourcePolicyRequest struct {
	BlockPublicPolicy *bool  `json:"BlockPublicPolicy,omitempty"`
	ResourcePolicy    string `json:"ResourcePolicy"`
	SecretID          string `json:"SecretId"`
}
