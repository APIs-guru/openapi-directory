package shared

type ListDelegatedServicesForAccountResponse struct {
	DelegatedServices []DelegatedService `json:"DelegatedServices"`
	NextToken         *string            `json:"NextToken"`
}
