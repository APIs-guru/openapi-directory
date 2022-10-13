package shared

type GetLoadBalancersResult struct {
	LoadBalancers []LoadBalancer `json:"loadBalancers"`
	NextPageToken *string        `json:"nextPageToken"`
}
