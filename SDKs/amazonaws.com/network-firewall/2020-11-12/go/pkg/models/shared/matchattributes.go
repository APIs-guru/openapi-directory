package shared



type MatchAttributes struct {
    DestinationPorts []PortRange `json:"DestinationPorts,omitempty"`
    Destinations []Address `json:"Destinations,omitempty"`
    Protocols []int64 `json:"Protocols,omitempty"`
    SourcePorts []PortRange `json:"SourcePorts,omitempty"`
    Sources []Address `json:"Sources,omitempty"`
    TCPFlags []TCPFlagField `json:"TCPFlags,omitempty"`
    
}

