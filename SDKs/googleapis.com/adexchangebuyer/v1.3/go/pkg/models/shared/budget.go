package shared



type Budget struct {
    AccountID *string `json:"accountId,omitempty"`
    BillingID *string `json:"billingId,omitempty"`
    BudgetAmount *string `json:"budgetAmount,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

