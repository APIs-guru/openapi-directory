package shared

type ReplicateKeyRequest struct {
	BypassPolicyLockoutSafetyCheck *bool   `json:"BypassPolicyLockoutSafetyCheck"`
	Description                    *string `json:"Description"`
	KeyID                          string  `json:"KeyId"`
	Policy                         *string `json:"Policy"`
	ReplicaRegion                  string  `json:"ReplicaRegion"`
	Tags                           []Tag   `json:"Tags"`
}
