package shared



type AwsElbv2LoadBalancerDetails struct {
    AvailabilityZones []AvailabilityZone `json:"AvailabilityZones,omitempty"`
    CanonicalHostedZoneID *string `json:"CanonicalHostedZoneId,omitempty"`
    CreatedTime *string `json:"CreatedTime,omitempty"`
    DNSName *string `json:"DNSName,omitempty"`
    IPAddressType *string `json:"IpAddressType,omitempty"`
    Scheme *string `json:"Scheme,omitempty"`
    SecurityGroups []string `json:"SecurityGroups,omitempty"`
    State *LoadBalancerState `json:"State,omitempty"`
    Type *string `json:"Type,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

