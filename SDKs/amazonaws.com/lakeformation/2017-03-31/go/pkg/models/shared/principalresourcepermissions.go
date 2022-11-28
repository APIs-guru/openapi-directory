package shared

// PrincipalResourcePermissions
// The permissions granted or revoked on a resource.
type PrincipalResourcePermissions struct {
	AdditionalDetails          *DetailsMap        `json:"AdditionalDetails,omitempty"`
	Permissions                []PermissionEnum   `json:"Permissions,omitempty"`
	PermissionsWithGrantOption []PermissionEnum   `json:"PermissionsWithGrantOption,omitempty"`
	Principal                  *DataLakePrincipal `json:"Principal,omitempty"`
	Resource                   *Resource          `json:"Resource,omitempty"`
}
