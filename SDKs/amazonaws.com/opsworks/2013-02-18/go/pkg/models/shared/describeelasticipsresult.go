package shared

// DescribeElasticIpsResult
// Contains the response to a <code>DescribeElasticIps</code> request.
type DescribeElasticIpsResult struct {
	ElasticIps []ElasticIP `json:"ElasticIps,omitempty"`
}
