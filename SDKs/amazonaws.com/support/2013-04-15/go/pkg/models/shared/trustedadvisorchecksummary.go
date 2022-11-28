package shared

// TrustedAdvisorCheckSummary
// A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
type TrustedAdvisorCheckSummary struct {
	CategorySpecificSummary TrustedAdvisorCategorySpecificSummary `json:"categorySpecificSummary"`
	CheckID                 string                                `json:"checkId"`
	HasFlaggedResources     *bool                                 `json:"hasFlaggedResources,omitempty"`
	ResourcesSummary        TrustedAdvisorResourcesSummary        `json:"resourcesSummary"`
	Status                  string                                `json:"status"`
	Timestamp               string                                `json:"timestamp"`
}
