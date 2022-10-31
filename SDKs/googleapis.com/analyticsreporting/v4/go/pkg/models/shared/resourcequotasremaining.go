package shared

type ResourceQuotasRemaining struct {
	DailyQuotaTokensRemaining  *int32 `json:"dailyQuotaTokensRemaining,omitempty"`
	HourlyQuotaTokensRemaining *int32 `json:"hourlyQuotaTokensRemaining,omitempty"`
}
