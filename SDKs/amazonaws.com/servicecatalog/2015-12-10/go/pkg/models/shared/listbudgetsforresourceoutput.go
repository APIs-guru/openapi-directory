package shared

type ListBudgetsForResourceOutput struct {
	Budgets       []BudgetDetail `json:"Budgets"`
	NextPageToken *string        `json:"NextPageToken"`
}
