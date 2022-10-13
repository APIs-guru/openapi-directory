package shared

type ListResolverQueryLogConfigsResponse struct {
	NextToken               *string                  `json:"NextToken"`
	ResolverQueryLogConfigs []ResolverQueryLogConfig `json:"ResolverQueryLogConfigs"`
	TotalCount              *int64                   `json:"TotalCount"`
	TotalFilteredCount      *int64                   `json:"TotalFilteredCount"`
}
