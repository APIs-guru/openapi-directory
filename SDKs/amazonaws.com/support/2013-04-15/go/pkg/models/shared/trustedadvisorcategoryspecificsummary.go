package shared

// TrustedAdvisorCategorySpecificSummary
// The container for summary information that relates to the category of the Trusted Advisor check.
type TrustedAdvisorCategorySpecificSummary struct {
	CostOptimizing *TrustedAdvisorCostOptimizingSummary `json:"costOptimizing,omitempty"`
}
