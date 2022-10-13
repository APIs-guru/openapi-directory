package shared

type CreateKeyRequest struct {
	BypassPolicyLockoutSafetyCheck *bool                      `json:"BypassPolicyLockoutSafetyCheck"`
	CustomKeyStoreID               *string                    `json:"CustomKeyStoreId"`
	CustomerMasterKeySpec          *CustomerMasterKeySpecEnum `json:"CustomerMasterKeySpec"`
	Description                    *string                    `json:"Description"`
	KeySpec                        *KeySpecEnum               `json:"KeySpec"`
	KeyUsage                       *KeyUsageTypeEnum          `json:"KeyUsage"`
	MultiRegion                    *bool                      `json:"MultiRegion"`
	Origin                         *OriginTypeEnum            `json:"Origin"`
	Policy                         *string                    `json:"Policy"`
	Tags                           []Tag                      `json:"Tags"`
}
