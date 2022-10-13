package shared

type ListPermissionSetsProvisionedToAccountResponse struct {
	NextToken      *string  `json:"NextToken"`
	PermissionSets []string `json:"PermissionSets"`
}
