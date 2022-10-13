package shared

type ElasticLoadBalancer struct {
	AvailabilityZones       []string `json:"AvailabilityZones"`
	DNSName                 *string  `json:"DnsName"`
	Ec2InstanceIds          []string `json:"Ec2InstanceIds"`
	ElasticLoadBalancerName *string  `json:"ElasticLoadBalancerName"`
	LayerID                 *string  `json:"LayerId"`
	Region                  *string  `json:"Region"`
	StackID                 *string  `json:"StackId"`
	SubnetIds               []string `json:"SubnetIds"`
	VpcID                   *string  `json:"VpcId"`
}
