package shared

type GetAccountResponse struct {
	DedicatedIPAutoWarmupEnabled *bool      `json:"DedicatedIpAutoWarmupEnabled"`
	EnforcementStatus            *string    `json:"EnforcementStatus"`
	ProductionAccessEnabled      *bool      `json:"ProductionAccessEnabled"`
	SendQuota                    *SendQuota `json:"SendQuota"`
	SendingEnabled               *bool      `json:"SendingEnabled"`
}
