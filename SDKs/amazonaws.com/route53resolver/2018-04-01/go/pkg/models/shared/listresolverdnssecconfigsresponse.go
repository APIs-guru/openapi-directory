package shared

type ListResolverDnssecConfigsResponse struct {
	NextToken             *string                `json:"NextToken,omitempty"`
	ResolverDnssecConfigs []ResolverDnssecConfig `json:"ResolverDnssecConfigs,omitempty"`
}
