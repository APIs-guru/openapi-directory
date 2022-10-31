package shared

type ListResolverQueryLogConfigsResponse struct {
	NextToken               *string                  `json:"NextToken,omitempty"`
	ResolverQueryLogConfigs []ResolverQueryLogConfig `json:"ResolverQueryLogConfigs,omitempty"`
	TotalCount              *int64                   `json:"TotalCount,omitempty"`
	TotalFilteredCount      *int64                   `json:"TotalFilteredCount,omitempty"`
}
