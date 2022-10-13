package shared

type ListAliasesResponse struct {
	Aliases   []string `json:"Aliases"`
	NextToken *string  `json:"NextToken"`
}
