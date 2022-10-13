package shared

type ListOrganizationAdminAccountsResponse struct {
	AdminAccounts []AdminAccount `json:"adminAccounts"`
	NextToken     *string        `json:"nextToken"`
}
