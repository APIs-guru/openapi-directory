package shared

// TrustedAdvisorCostOptimizingSummary
// The estimated cost savings that might be realized if the recommended operations are taken.
type TrustedAdvisorCostOptimizingSummary struct {
	EstimatedMonthlySavings        float64 `json:"estimatedMonthlySavings"`
	EstimatedPercentMonthlySavings float64 `json:"estimatedPercentMonthlySavings"`
}
