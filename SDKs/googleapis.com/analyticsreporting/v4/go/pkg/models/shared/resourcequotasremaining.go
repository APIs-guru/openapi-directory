package shared

type ResourceQuotasRemaining struct {
	DailyQuotaTokensRemaining  *int32 `json:"dailyQuotaTokensRemaining"`
	HourlyQuotaTokensRemaining *int32 `json:"hourlyQuotaTokensRemaining"`
}
