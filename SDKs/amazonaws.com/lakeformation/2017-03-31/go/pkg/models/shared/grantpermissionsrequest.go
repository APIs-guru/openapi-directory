package shared

type GrantPermissionsRequest struct {
	CatalogID                  *string           `json:"CatalogId"`
	Permissions                []PermissionEnum  `json:"Permissions"`
	PermissionsWithGrantOption []PermissionEnum  `json:"PermissionsWithGrantOption"`
	Principal                  DataLakePrincipal `json:"Principal"`
	Resource                   Resource          `json:"Resource"`
}
