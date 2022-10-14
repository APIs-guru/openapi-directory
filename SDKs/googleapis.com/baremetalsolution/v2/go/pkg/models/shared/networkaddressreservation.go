package shared

type NetworkAddressReservation struct {
	EndAddress   *string `json:"endAddress,omitempty"`
	Note         *string `json:"note,omitempty"`
	StartAddress *string `json:"startAddress,omitempty"`
}
