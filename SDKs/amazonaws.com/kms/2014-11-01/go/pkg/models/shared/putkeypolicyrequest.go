package shared

type PutKeyPolicyRequest struct {
	BypassPolicyLockoutSafetyCheck *bool  `json:"BypassPolicyLockoutSafetyCheck"`
	KeyID                          string `json:"KeyId"`
	Policy                         string `json:"Policy"`
	PolicyName                     string `json:"PolicyName"`
}
