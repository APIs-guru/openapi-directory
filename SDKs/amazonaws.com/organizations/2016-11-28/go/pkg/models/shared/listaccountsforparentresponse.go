package shared

type ListAccountsForParentResponse struct {
	Accounts  []Account `json:"Accounts"`
	NextToken *string   `json:"NextToken"`
}
