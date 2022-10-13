package shared

type AccountQuota struct {
	QuotaRemaining *float64 `json:"quotaRemaining"`
	QuotaTotal     *float64 `json:"quotaTotal"`
	QuotaUsed      *float64 `json:"quotaUsed"`
}

type Account struct {
	Environment *string       `json:"environment"`
	Features    []string      `json:"features"`
	Quota       *AccountQuota `json:"quota"`
}
