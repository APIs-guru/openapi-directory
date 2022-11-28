package shared

// Firewall
// <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
type Firewall struct {
	DeleteProtection               *bool           `json:"DeleteProtection,omitempty"`
	Description                    *string         `json:"Description,omitempty"`
	FirewallArn                    *string         `json:"FirewallArn,omitempty"`
	FirewallID                     string          `json:"FirewallId"`
	FirewallName                   *string         `json:"FirewallName,omitempty"`
	FirewallPolicyArn              string          `json:"FirewallPolicyArn"`
	FirewallPolicyChangeProtection *bool           `json:"FirewallPolicyChangeProtection,omitempty"`
	SubnetChangeProtection         *bool           `json:"SubnetChangeProtection,omitempty"`
	SubnetMappings                 []SubnetMapping `json:"SubnetMappings"`
	Tags                           []Tag           `json:"Tags,omitempty"`
	VpcID                          string          `json:"VpcId"`
}
