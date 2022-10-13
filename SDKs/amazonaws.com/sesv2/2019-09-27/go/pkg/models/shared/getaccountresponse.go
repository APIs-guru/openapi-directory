package shared

type GetAccountResponse struct {
	DedicatedIPAutoWarmupEnabled *bool                  `json:"DedicatedIpAutoWarmupEnabled"`
	Details                      *AccountDetails        `json:"Details"`
	EnforcementStatus            *string                `json:"EnforcementStatus"`
	ProductionAccessEnabled      *bool                  `json:"ProductionAccessEnabled"`
	SendQuota                    *SendQuota             `json:"SendQuota"`
	SendingEnabled               *bool                  `json:"SendingEnabled"`
	SuppressionAttributes        *SuppressionAttributes `json:"SuppressionAttributes"`
}
