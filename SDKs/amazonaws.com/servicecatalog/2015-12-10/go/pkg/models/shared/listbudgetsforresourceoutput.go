package shared



type ListBudgetsForResourceOutput struct {
    Budgets []BudgetDetail `json:"Budgets,omitempty"`
    NextPageToken *string `json:"NextPageToken,omitempty"`
    
}

