package shared

type PutResourcePolicyRequest struct {
	PolicyDocument *string `json:"policyDocument"`
	PolicyName     *string `json:"policyName"`
}
