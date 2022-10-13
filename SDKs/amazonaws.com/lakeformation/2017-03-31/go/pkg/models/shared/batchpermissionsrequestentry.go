package shared

type BatchPermissionsRequestEntry struct {
	ID                         string             `json:"Id"`
	Permissions                []PermissionEnum   `json:"Permissions"`
	PermissionsWithGrantOption []PermissionEnum   `json:"PermissionsWithGrantOption"`
	Principal                  *DataLakePrincipal `json:"Principal"`
	Resource                   *Resource          `json:"Resource"`
}
