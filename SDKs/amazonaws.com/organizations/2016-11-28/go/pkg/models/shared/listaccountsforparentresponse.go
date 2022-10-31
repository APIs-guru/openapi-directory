package shared

type ListAccountsForParentResponse struct {
	Accounts  []Account `json:"Accounts,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
