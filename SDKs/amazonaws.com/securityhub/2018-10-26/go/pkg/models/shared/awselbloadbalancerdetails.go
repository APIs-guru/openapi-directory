package shared



type AwsElbLoadBalancerDetails struct {
    AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
    BackendServerDescriptions []AwsElbLoadBalancerBackendServerDescription `json:"BackendServerDescriptions,omitempty"`
    CanonicalHostedZoneName *string `json:"CanonicalHostedZoneName,omitempty"`
    CanonicalHostedZoneNameID *string `json:"CanonicalHostedZoneNameID,omitempty"`
    CreatedTime *string `json:"CreatedTime,omitempty"`
    DNSName *string `json:"DnsName,omitempty"`
    HealthCheck *AwsElbLoadBalancerHealthCheck `json:"HealthCheck,omitempty"`
    Instances []AwsElbLoadBalancerInstance `json:"Instances,omitempty"`
    ListenerDescriptions []AwsElbLoadBalancerListenerDescription `json:"ListenerDescriptions,omitempty"`
    LoadBalancerAttributes *AwsElbLoadBalancerAttributes `json:"LoadBalancerAttributes,omitempty"`
    LoadBalancerName *string `json:"LoadBalancerName,omitempty"`
    Policies *AwsElbLoadBalancerPolicies `json:"Policies,omitempty"`
    Scheme *string `json:"Scheme,omitempty"`
    SecurityGroups []string `json:"SecurityGroups,omitempty"`
    SourceSecurityGroup *AwsElbLoadBalancerSourceSecurityGroup `json:"SourceSecurityGroup,omitempty"`
    Subnets []string `json:"Subnets,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

