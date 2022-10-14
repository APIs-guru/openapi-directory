package shared

type ListPermissionsResponse struct {
	NextToken                    *string                        `json:"NextToken,omitempty"`
	PrincipalResourcePermissions []PrincipalResourcePermissions `json:"PrincipalResourcePermissions,omitempty"`
}
