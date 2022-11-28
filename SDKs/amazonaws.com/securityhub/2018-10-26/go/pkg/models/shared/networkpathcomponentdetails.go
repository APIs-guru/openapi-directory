package shared

// NetworkPathComponentDetails
// Information about the destination of the next component in the network path.
type NetworkPathComponentDetails struct {
	Address    []string    `json:"Address,omitempty"`
	PortRanges []PortRange `json:"PortRanges,omitempty"`
}
