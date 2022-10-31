package shared



type AwsElbLoadBalancerBackendServerDescription struct {
    InstancePort *int64 `json:"InstancePort,omitempty"`
    PolicyNames []string `json:"PolicyNames,omitempty"`
    
}

