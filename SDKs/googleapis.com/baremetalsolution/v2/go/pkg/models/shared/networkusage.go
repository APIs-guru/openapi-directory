package shared

type NetworkUsage struct {
	Network *Network `json:"network"`
	UsedIps []string `json:"usedIps"`
}
