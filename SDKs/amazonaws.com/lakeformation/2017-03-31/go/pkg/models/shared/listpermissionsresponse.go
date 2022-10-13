package shared

type ListPermissionsResponse struct {
	NextToken                    *string                        `json:"NextToken"`
	PrincipalResourcePermissions []PrincipalResourcePermissions `json:"PrincipalResourcePermissions"`
}
