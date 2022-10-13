package shared

type ValidateResourcePolicyRequest struct {
	ResourcePolicy string  `json:"ResourcePolicy"`
	SecretID       *string `json:"SecretId"`
}
