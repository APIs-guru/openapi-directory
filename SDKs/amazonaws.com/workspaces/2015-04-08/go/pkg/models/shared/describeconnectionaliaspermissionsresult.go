package shared



type DescribeConnectionAliasPermissionsResult struct {
    AliasID *string `json:"AliasId,omitempty"`
    ConnectionAliasPermissions []ConnectionAliasPermission `json:"ConnectionAliasPermissions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

