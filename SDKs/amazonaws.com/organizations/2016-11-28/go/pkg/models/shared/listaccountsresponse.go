package shared

type ListAccountsResponse struct {
	Accounts  []Account `json:"Accounts,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
