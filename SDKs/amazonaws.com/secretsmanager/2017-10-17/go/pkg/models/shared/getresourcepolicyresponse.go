package shared

type GetResourcePolicyResponse struct {
	Arn            *string `json:"ARN"`
	Name           *string `json:"Name"`
	ResourcePolicy *string `json:"ResourcePolicy"`
}
