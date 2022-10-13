package shared

type ListMailboxPermissionsResponse struct {
	NextToken   *string      `json:"NextToken"`
	Permissions []Permission `json:"Permissions"`
}
