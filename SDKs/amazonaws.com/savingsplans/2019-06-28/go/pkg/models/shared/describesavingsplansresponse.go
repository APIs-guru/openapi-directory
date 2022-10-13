package shared

type DescribeSavingsPlansResponse struct {
	NextToken    *string       `json:"nextToken"`
	SavingsPlans []SavingsPlan `json:"savingsPlans"`
}
