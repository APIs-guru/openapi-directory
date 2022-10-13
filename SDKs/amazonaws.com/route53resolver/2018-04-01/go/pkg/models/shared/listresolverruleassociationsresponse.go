package shared

type ListResolverRuleAssociationsResponse struct {
	MaxResults               *int64                    `json:"MaxResults"`
	NextToken                *string                   `json:"NextToken"`
	ResolverRuleAssociations []ResolverRuleAssociation `json:"ResolverRuleAssociations"`
}
