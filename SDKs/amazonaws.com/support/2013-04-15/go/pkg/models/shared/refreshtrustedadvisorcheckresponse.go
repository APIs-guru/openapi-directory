package shared

// RefreshTrustedAdvisorCheckResponse
// The current refresh status of a Trusted Advisor check.
type RefreshTrustedAdvisorCheckResponse struct {
	Status TrustedAdvisorCheckRefreshStatus `json:"status"`
}
