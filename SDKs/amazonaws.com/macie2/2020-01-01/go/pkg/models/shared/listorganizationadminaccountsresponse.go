package shared

type ListOrganizationAdminAccountsResponse struct {
	AdminAccounts []AdminAccount `json:"adminAccounts,omitempty"`
	NextToken     *string        `json:"nextToken,omitempty"`
}
