package shared

// DescribeTrustedAdvisorCheckRefreshStatusesResponse
// The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
type DescribeTrustedAdvisorCheckRefreshStatusesResponse struct {
	Statuses []TrustedAdvisorCheckRefreshStatus `json:"statuses"`
}
