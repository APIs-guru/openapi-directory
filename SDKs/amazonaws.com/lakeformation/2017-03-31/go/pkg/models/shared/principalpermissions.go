package shared

// PrincipalPermissions
// Permissions granted to a principal.
type PrincipalPermissions struct {
	Permissions []PermissionEnum   `json:"Permissions,omitempty"`
	Principal   *DataLakePrincipal `json:"Principal,omitempty"`
}
