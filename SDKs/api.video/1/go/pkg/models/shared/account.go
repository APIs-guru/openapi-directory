package shared

// AccountQuota
// Deprecated
type AccountQuota struct {
	QuotaRemaining *float64 `json:"quotaRemaining,omitempty"`
	QuotaTotal     *float64 `json:"quotaTotal,omitempty"`
	QuotaUsed      *float64 `json:"quotaUsed,omitempty"`
}

type Account struct {
	Environment *string       `json:"environment,omitempty"`
	Features    []string      `json:"features,omitempty"`
	Quota       *AccountQuota `json:"quota,omitempty"`
}
