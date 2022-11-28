package shared

// ResourceQuotasRemaining
// The resource quota tokens remaining for the property after the request is completed.
type ResourceQuotasRemaining struct {
	DailyQuotaTokensRemaining  *int32 `json:"dailyQuotaTokensRemaining,omitempty"`
	HourlyQuotaTokensRemaining *int32 `json:"hourlyQuotaTokensRemaining,omitempty"`
}
