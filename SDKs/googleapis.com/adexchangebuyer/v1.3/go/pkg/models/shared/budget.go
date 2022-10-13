package shared

type Budget struct {
	AccountID    *string `json:"accountId"`
	BillingID    *string `json:"billingId"`
	BudgetAmount *string `json:"budgetAmount"`
	CurrencyCode *string `json:"currencyCode"`
	ID           *string `json:"id"`
	Kind         *string `json:"kind"`
}
