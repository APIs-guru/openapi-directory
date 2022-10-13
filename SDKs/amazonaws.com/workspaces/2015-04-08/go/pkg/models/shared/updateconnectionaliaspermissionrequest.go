package shared

type UpdateConnectionAliasPermissionRequest struct {
	AliasID                   string                    `json:"AliasId"`
	ConnectionAliasPermission ConnectionAliasPermission `json:"ConnectionAliasPermission"`
}
