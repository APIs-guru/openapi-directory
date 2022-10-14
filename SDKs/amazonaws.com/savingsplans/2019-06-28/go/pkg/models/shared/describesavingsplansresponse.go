package shared

type DescribeSavingsPlansResponse struct {
	NextToken    *string       `json:"nextToken,omitempty"`
	SavingsPlans []SavingsPlan `json:"savingsPlans,omitempty"`
}
