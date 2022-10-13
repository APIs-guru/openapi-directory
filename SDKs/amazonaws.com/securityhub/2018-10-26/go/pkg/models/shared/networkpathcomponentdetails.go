package shared

type NetworkPathComponentDetails struct {
	Address    []string    `json:"Address"`
	PortRanges []PortRange `json:"PortRanges"`
}
