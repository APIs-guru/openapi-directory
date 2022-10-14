package shared

type ListPermissionSetsResponse struct {
	NextToken      *string  `json:"NextToken,omitempty"`
	PermissionSets []string `json:"PermissionSets,omitempty"`
}
