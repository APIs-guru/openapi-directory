package shared

type ListResolverQueryLogConfigAssociationsResponse struct {
	NextToken                          *string                             `json:"NextToken"`
	ResolverQueryLogConfigAssociations []ResolverQueryLogConfigAssociation `json:"ResolverQueryLogConfigAssociations"`
	TotalCount                         *int64                              `json:"TotalCount"`
	TotalFilteredCount                 *int64                              `json:"TotalFilteredCount"`
}
