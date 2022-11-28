package shared

// NetworkAddressReservation
// A reservation of one or more addresses in a network.
type NetworkAddressReservation struct {
	EndAddress   *string `json:"endAddress,omitempty"`
	Note         *string `json:"note,omitempty"`
	StartAddress *string `json:"startAddress,omitempty"`
}
