package shared

type GetEffectivePermissionsForPathResponse struct {
	NextToken   *string                        `json:"NextToken"`
	Permissions []PrincipalResourcePermissions `json:"Permissions"`
}
