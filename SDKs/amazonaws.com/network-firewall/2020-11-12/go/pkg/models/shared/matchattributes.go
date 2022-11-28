package shared

// MatchAttributes
// Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
type MatchAttributes struct {
	DestinationPorts []PortRange    `json:"DestinationPorts,omitempty"`
	Destinations     []Address      `json:"Destinations,omitempty"`
	Protocols        []int64        `json:"Protocols,omitempty"`
	SourcePorts      []PortRange    `json:"SourcePorts,omitempty"`
	Sources          []Address      `json:"Sources,omitempty"`
	TCPFlags         []TCPFlagField `json:"TCPFlags,omitempty"`
}
