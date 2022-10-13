package shared

type DescribeConnectionAliasesResult struct {
	ConnectionAliases []ConnectionAlias `json:"ConnectionAliases"`
	NextToken         *string           `json:"NextToken"`
}
