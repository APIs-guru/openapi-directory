package shared

type ListAccountsForProvisionedPermissionSetResponse struct {
	AccountIds []string `json:"AccountIds"`
	NextToken  *string  `json:"NextToken"`
}
