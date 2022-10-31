package shared



type NetworkUsage struct {
    Network *Network `json:"network,omitempty"`
    UsedIps []string `json:"usedIps,omitempty"`
    
}

