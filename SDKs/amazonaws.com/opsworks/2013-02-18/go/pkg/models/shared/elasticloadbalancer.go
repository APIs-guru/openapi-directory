package shared

// ElasticLoadBalancer
// Describes an Elastic Load Balancing instance.
type ElasticLoadBalancer struct {
	AvailabilityZones       []string `json:"AvailabilityZones,omitempty"`
	DNSName                 *string  `json:"DnsName,omitempty"`
	Ec2InstanceIds          []string `json:"Ec2InstanceIds,omitempty"`
	ElasticLoadBalancerName *string  `json:"ElasticLoadBalancerName,omitempty"`
	LayerID                 *string  `json:"LayerId,omitempty"`
	Region                  *string  `json:"Region,omitempty"`
	StackID                 *string  `json:"StackId,omitempty"`
	SubnetIds               []string `json:"SubnetIds,omitempty"`
	VpcID                   *string  `json:"VpcId,omitempty"`
}
