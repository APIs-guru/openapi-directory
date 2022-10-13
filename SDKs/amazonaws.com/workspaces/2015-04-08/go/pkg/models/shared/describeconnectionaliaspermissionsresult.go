package shared

type DescribeConnectionAliasPermissionsResult struct {
	AliasID                    *string                     `json:"AliasId"`
	ConnectionAliasPermissions []ConnectionAliasPermission `json:"ConnectionAliasPermissions"`
	NextToken                  *string                     `json:"NextToken"`
}
