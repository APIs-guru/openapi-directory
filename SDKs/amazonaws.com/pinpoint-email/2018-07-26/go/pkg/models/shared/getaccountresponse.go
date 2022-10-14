package shared

type GetAccountResponse struct {
	DedicatedIPAutoWarmupEnabled *bool      `json:"DedicatedIpAutoWarmupEnabled,omitempty"`
	EnforcementStatus            *string    `json:"EnforcementStatus,omitempty"`
	ProductionAccessEnabled      *bool      `json:"ProductionAccessEnabled,omitempty"`
	SendQuota                    *SendQuota `json:"SendQuota,omitempty"`
	SendingEnabled               *bool      `json:"SendingEnabled,omitempty"`
}
