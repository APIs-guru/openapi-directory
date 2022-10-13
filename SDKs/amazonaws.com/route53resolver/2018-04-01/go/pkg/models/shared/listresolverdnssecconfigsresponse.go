package shared

type ListResolverDnssecConfigsResponse struct {
	NextToken             *string                `json:"NextToken"`
	ResolverDnssecConfigs []ResolverDnssecConfig `json:"ResolverDnssecConfigs"`
}
