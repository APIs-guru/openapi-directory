package shared

type PutResourcePolicyRequest struct {
	BlockPublicPolicy *bool  `json:"BlockPublicPolicy"`
	ResourcePolicy    string `json:"ResourcePolicy"`
	SecretID          string `json:"SecretId"`
}
