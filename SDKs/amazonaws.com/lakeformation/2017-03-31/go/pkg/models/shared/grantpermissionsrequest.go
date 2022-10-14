package shared

type GrantPermissionsRequest struct {
	CatalogID                  *string           `json:"CatalogId,omitempty"`
	Permissions                []PermissionEnum  `json:"Permissions"`
	PermissionsWithGrantOption []PermissionEnum  `json:"PermissionsWithGrantOption,omitempty"`
	Principal                  DataLakePrincipal `json:"Principal"`
	Resource                   Resource          `json:"Resource"`
}
