package shared

type MatchAttributes struct {
	DestinationPorts []PortRange    `json:"DestinationPorts"`
	Destinations     []Address      `json:"Destinations"`
	Protocols        []int64        `json:"Protocols"`
	SourcePorts      []PortRange    `json:"SourcePorts"`
	Sources          []Address      `json:"Sources"`
	TCPFlags         []TCPFlagField `json:"TCPFlags"`
}
