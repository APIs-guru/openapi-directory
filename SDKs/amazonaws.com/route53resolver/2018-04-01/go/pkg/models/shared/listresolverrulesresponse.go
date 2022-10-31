package shared

type ListResolverRulesResponse struct {
	MaxResults    *int64         `json:"MaxResults,omitempty"`
	NextToken     *string        `json:"NextToken,omitempty"`
	ResolverRules []ResolverRule `json:"ResolverRules,omitempty"`
}
