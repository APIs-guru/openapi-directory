package shared



type GetEffectivePermissionsForPathResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Permissions []PrincipalResourcePermissions `json:"Permissions,omitempty"`
    
}

