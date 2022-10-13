package shared

type GoogleAnalyticsAdminV1alphaAccessQuota struct {
	ConcurrentRequests            *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"concurrentRequests"`
	ServerErrorsPerProjectPerHour *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"serverErrorsPerProjectPerHour"`
	TokensPerDay                  *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"tokensPerDay"`
	TokensPerHour                 *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"tokensPerHour"`
	TokensPerProjectPerHour       *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"tokensPerProjectPerHour"`
}
