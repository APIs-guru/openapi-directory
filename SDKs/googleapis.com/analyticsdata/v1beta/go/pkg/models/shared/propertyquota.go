package shared



type PropertyQuota struct {
    ConcurrentRequests *QuotaStatus `json:"concurrentRequests,omitempty"`
    PotentiallyThresholdedRequestsPerHour *QuotaStatus `json:"potentiallyThresholdedRequestsPerHour,omitempty"`
    ServerErrorsPerProjectPerHour *QuotaStatus `json:"serverErrorsPerProjectPerHour,omitempty"`
    TokensPerDay *QuotaStatus `json:"tokensPerDay,omitempty"`
    TokensPerHour *QuotaStatus `json:"tokensPerHour,omitempty"`
    TokensPerProjectPerHour *QuotaStatus `json:"tokensPerProjectPerHour,omitempty"`
    
}

