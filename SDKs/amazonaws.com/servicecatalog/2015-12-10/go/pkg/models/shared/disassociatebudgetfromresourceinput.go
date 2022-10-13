package shared

type DisassociateBudgetFromResourceInput struct {
	BudgetName string `json:"BudgetName"`
	ResourceID string `json:"ResourceId"`
}
