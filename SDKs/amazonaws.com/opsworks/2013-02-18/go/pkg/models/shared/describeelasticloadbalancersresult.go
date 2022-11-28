package shared

// DescribeElasticLoadBalancersResult
// Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
type DescribeElasticLoadBalancersResult struct {
	ElasticLoadBalancers []ElasticLoadBalancer `json:"ElasticLoadBalancers,omitempty"`
}
