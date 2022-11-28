package shared

// TrustedAdvisorResourcesSummary
// Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
type TrustedAdvisorResourcesSummary struct {
	ResourcesFlagged    int64 `json:"resourcesFlagged"`
	ResourcesIgnored    int64 `json:"resourcesIgnored"`
	ResourcesProcessed  int64 `json:"resourcesProcessed"`
	ResourcesSuppressed int64 `json:"resourcesSuppressed"`
}
