package shared

// TrustedAdvisorCheckRefreshStatus
// The refresh status of a Trusted Advisor check.
type TrustedAdvisorCheckRefreshStatus struct {
	CheckID                    string `json:"checkId"`
	MillisUntilNextRefreshable int64  `json:"millisUntilNextRefreshable"`
	Status                     string `json:"status"`
}
