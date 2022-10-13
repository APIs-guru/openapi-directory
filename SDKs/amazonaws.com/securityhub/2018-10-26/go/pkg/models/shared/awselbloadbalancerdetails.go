package shared

type AwsElbLoadBalancerDetails struct {
	AvailabilityZones         []string                                     `json:"AvailabilityZones"`
	BackendServerDescriptions []AwsElbLoadBalancerBackendServerDescription `json:"BackendServerDescriptions"`
	CanonicalHostedZoneName   *string                                      `json:"CanonicalHostedZoneName"`
	CanonicalHostedZoneNameID *string                                      `json:"CanonicalHostedZoneNameID"`
	CreatedTime               *string                                      `json:"CreatedTime"`
	DNSName                   *string                                      `json:"DnsName"`
	HealthCheck               *AwsElbLoadBalancerHealthCheck               `json:"HealthCheck"`
	Instances                 []AwsElbLoadBalancerInstance                 `json:"Instances"`
	ListenerDescriptions      []AwsElbLoadBalancerListenerDescription      `json:"ListenerDescriptions"`
	LoadBalancerAttributes    *AwsElbLoadBalancerAttributes                `json:"LoadBalancerAttributes"`
	LoadBalancerName          *string                                      `json:"LoadBalancerName"`
	Policies                  *AwsElbLoadBalancerPolicies                  `json:"Policies"`
	Scheme                    *string                                      `json:"Scheme"`
	SecurityGroups            []string                                     `json:"SecurityGroups"`
	SourceSecurityGroup       *AwsElbLoadBalancerSourceSecurityGroup       `json:"SourceSecurityGroup"`
	Subnets                   []string                                     `json:"Subnets"`
	VpcID                     *string                                      `json:"VpcId"`
}
