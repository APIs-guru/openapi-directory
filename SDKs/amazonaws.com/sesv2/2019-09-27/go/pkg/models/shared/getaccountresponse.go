package shared



type GetAccountResponse struct {
    DedicatedIPAutoWarmupEnabled *bool `json:"DedicatedIpAutoWarmupEnabled,omitempty"`
    Details *AccountDetails `json:"Details,omitempty"`
    EnforcementStatus *string `json:"EnforcementStatus,omitempty"`
    ProductionAccessEnabled *bool `json:"ProductionAccessEnabled,omitempty"`
    SendQuota *SendQuota `json:"SendQuota,omitempty"`
    SendingEnabled *bool `json:"SendingEnabled,omitempty"`
    SuppressionAttributes *SuppressionAttributes `json:"SuppressionAttributes,omitempty"`
    
}

