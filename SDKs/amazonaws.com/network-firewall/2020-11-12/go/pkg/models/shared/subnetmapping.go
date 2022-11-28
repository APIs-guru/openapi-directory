package shared

// SubnetMapping
// The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. AWS Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
type SubnetMapping struct {
	SubnetID string `json:"SubnetId"`
}
