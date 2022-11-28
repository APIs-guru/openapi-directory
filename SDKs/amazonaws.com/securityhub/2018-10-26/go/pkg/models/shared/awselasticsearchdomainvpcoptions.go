package shared

// AwsElasticsearchDomainVpcOptions
// Information that Elasticsearch derives based on <code>VPCOptions</code> for the domain.
type AwsElasticsearchDomainVpcOptions struct {
	AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
	SecurityGroupIds  []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds         []string `json:"SubnetIds,omitempty"`
	VpcID             *string  `json:"VPCId,omitempty"`
}
