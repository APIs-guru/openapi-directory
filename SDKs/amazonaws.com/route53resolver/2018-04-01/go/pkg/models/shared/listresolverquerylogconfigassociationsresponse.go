package shared

type ListResolverQueryLogConfigAssociationsResponse struct {
	NextToken                          *string                             `json:"NextToken,omitempty"`
	ResolverQueryLogConfigAssociations []ResolverQueryLogConfigAssociation `json:"ResolverQueryLogConfigAssociations,omitempty"`
	TotalCount                         *int64                              `json:"TotalCount,omitempty"`
	TotalFilteredCount                 *int64                              `json:"TotalFilteredCount,omitempty"`
}
