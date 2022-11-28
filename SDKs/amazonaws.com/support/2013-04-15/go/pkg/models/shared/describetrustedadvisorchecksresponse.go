package shared

// DescribeTrustedAdvisorChecksResponse
// Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
type DescribeTrustedAdvisorChecksResponse struct {
	Checks []TrustedAdvisorCheckDescription `json:"checks"`
}
