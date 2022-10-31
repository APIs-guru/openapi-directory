package shared



type AwsElbLoadBalancerListenerDescription struct {
    Listener *AwsElbLoadBalancerListener `json:"Listener,omitempty"`
    PolicyNames []string `json:"PolicyNames,omitempty"`
    
}

