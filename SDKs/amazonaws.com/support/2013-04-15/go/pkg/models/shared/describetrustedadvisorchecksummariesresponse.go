package shared

// DescribeTrustedAdvisorCheckSummariesResponse
// The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
type DescribeTrustedAdvisorCheckSummariesResponse struct {
	Summaries []TrustedAdvisorCheckSummary `json:"summaries"`
}
