package shared

type PropertyQuota struct {
	ConcurrentRequests                    *QuotaStatus `json:"concurrentRequests"`
	PotentiallyThresholdedRequestsPerHour *QuotaStatus `json:"potentiallyThresholdedRequestsPerHour"`
	ServerErrorsPerProjectPerHour         *QuotaStatus `json:"serverErrorsPerProjectPerHour"`
	TokensPerDay                          *QuotaStatus `json:"tokensPerDay"`
	TokensPerHour                         *QuotaStatus `json:"tokensPerHour"`
	TokensPerProjectPerHour               *QuotaStatus `json:"tokensPerProjectPerHour"`
}
