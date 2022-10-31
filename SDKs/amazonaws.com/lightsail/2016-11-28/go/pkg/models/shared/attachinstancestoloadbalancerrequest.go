package shared



type AttachInstancesToLoadBalancerRequest struct {
    InstanceNames []string `json:"instanceNames"`
    LoadBalancerName string `json:"loadBalancerName"`
    
}

