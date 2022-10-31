package shared



type NetworkPathComponentDetails struct {
    Address []string `json:"Address,omitempty"`
    PortRanges []PortRange `json:"PortRanges,omitempty"`
    
}

