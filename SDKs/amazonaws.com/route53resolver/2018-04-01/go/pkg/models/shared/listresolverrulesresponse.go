package shared

type ListResolverRulesResponse struct {
	MaxResults    *int64         `json:"MaxResults"`
	NextToken     *string        `json:"NextToken"`
	ResolverRules []ResolverRule `json:"ResolverRules"`
}
