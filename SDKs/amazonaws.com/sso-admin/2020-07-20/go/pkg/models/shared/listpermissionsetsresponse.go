package shared

type ListPermissionSetsResponse struct {
	NextToken      *string  `json:"NextToken"`
	PermissionSets []string `json:"PermissionSets"`
}
