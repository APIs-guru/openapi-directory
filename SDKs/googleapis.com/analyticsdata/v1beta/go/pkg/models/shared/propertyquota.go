package shared

// PropertyQuota
// Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
type PropertyQuota struct {
	ConcurrentRequests                    *QuotaStatus `json:"concurrentRequests,omitempty"`
	PotentiallyThresholdedRequestsPerHour *QuotaStatus `json:"potentiallyThresholdedRequestsPerHour,omitempty"`
	ServerErrorsPerProjectPerHour         *QuotaStatus `json:"serverErrorsPerProjectPerHour,omitempty"`
	TokensPerDay                          *QuotaStatus `json:"tokensPerDay,omitempty"`
	TokensPerHour                         *QuotaStatus `json:"tokensPerHour,omitempty"`
	TokensPerProjectPerHour               *QuotaStatus `json:"tokensPerProjectPerHour,omitempty"`
}
