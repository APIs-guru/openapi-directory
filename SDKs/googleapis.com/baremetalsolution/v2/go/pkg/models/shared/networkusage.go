package shared

// NetworkUsage
// Network with all used IP addresses.
type NetworkUsage struct {
	Network *Network `json:"network,omitempty"`
	UsedIps []string `json:"usedIps,omitempty"`
}
