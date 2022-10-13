package shared

type PrincipalResourcePermissions struct {
	AdditionalDetails          *DetailsMap        `json:"AdditionalDetails"`
	Permissions                []PermissionEnum   `json:"Permissions"`
	PermissionsWithGrantOption []PermissionEnum   `json:"PermissionsWithGrantOption"`
	Principal                  *DataLakePrincipal `json:"Principal"`
	Resource                   *Resource          `json:"Resource"`
}
