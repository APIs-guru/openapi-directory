package shared



type ListOrganizationAdminAccountsResponse struct {
    AdminAccounts []AdminAccount `json:"AdminAccounts,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

