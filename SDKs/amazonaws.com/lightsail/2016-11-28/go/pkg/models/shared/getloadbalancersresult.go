package shared



type GetLoadBalancersResult struct {
    LoadBalancers []LoadBalancer `json:"loadBalancers,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

