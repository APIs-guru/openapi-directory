package shared



type DescribeConnectionAliasesResult struct {
    ConnectionAliases []ConnectionAlias `json:"ConnectionAliases,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

