package shared

type AwsElbv2LoadBalancerDetails struct {
	AvailabilityZones     []AvailabilityZone `json:"AvailabilityZones"`
	CanonicalHostedZoneID *string            `json:"CanonicalHostedZoneId"`
	CreatedTime           *string            `json:"CreatedTime"`
	DNSName               *string            `json:"DNSName"`
	IPAddressType         *string            `json:"IpAddressType"`
	Scheme                *string            `json:"Scheme"`
	SecurityGroups        []string           `json:"SecurityGroups"`
	State                 *LoadBalancerState `json:"State"`
	Type                  *string            `json:"Type"`
	VpcID                 *string            `json:"VpcId"`
}
