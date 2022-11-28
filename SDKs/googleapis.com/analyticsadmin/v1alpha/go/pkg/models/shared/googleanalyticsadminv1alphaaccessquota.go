package shared

// GoogleAnalyticsAdminV1alphaAccessQuota
// Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
type GoogleAnalyticsAdminV1alphaAccessQuota struct {
	ConcurrentRequests            *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"concurrentRequests,omitempty"`
	ServerErrorsPerProjectPerHour *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"serverErrorsPerProjectPerHour,omitempty"`
	TokensPerDay                  *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"tokensPerDay,omitempty"`
	TokensPerHour                 *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"tokensPerHour,omitempty"`
	TokensPerProjectPerHour       *GoogleAnalyticsAdminV1alphaAccessQuotaStatus `json:"tokensPerProjectPerHour,omitempty"`
}
