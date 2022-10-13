package shared

type ListOrganizationAdminAccountsResponse struct {
	AdminAccounts []AdminAccount `json:"AdminAccounts"`
	NextToken     *string        `json:"NextToken"`
}
