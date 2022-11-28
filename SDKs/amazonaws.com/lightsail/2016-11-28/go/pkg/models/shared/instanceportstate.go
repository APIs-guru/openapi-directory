package shared

// InstancePortState
// Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
type InstancePortState struct {
	CidrListAliases []string             `json:"cidrListAliases,omitempty"`
	Cidrs           []string             `json:"cidrs,omitempty"`
	FromPort        *int64               `json:"fromPort,omitempty"`
	Ipv6Cidrs       []string             `json:"ipv6Cidrs,omitempty"`
	Protocol        *NetworkProtocolEnum `json:"protocol,omitempty"`
	State           *PortStateEnum       `json:"state,omitempty"`
	ToPort          *int64               `json:"toPort,omitempty"`
}
