package shared

type ListResolverRuleAssociationsResponse struct {
	MaxResults               *int64                    `json:"MaxResults,omitempty"`
	NextToken                *string                   `json:"NextToken,omitempty"`
	ResolverRuleAssociations []ResolverRuleAssociation `json:"ResolverRuleAssociations,omitempty"`
}
