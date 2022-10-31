package shared

type BatchPermissionsRequestEntry struct {
	ID                         string             `json:"Id"`
	Permissions                []PermissionEnum   `json:"Permissions,omitempty"`
	PermissionsWithGrantOption []PermissionEnum   `json:"PermissionsWithGrantOption,omitempty"`
	Principal                  *DataLakePrincipal `json:"Principal,omitempty"`
	Resource                   *Resource          `json:"Resource,omitempty"`
}
