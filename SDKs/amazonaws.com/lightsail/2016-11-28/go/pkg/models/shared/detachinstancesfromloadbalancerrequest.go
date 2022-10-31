package shared



type DetachInstancesFromLoadBalancerRequest struct {
    InstanceNames []string `json:"instanceNames"`
    LoadBalancerName string `json:"loadBalancerName"`
    
}

