package shared

type NetworkAddressReservation struct {
	EndAddress   *string `json:"endAddress"`
	Note         *string `json:"note"`
	StartAddress *string `json:"startAddress"`
}
