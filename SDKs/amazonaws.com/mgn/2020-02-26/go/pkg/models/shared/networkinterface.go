package shared

// NetworkInterface
// Network interface.
type NetworkInterface struct {
	Ips        []string `json:"ips,omitempty"`
	IsPrimary  *bool    `json:"isPrimary,omitempty"`
	MacAddress *string  `json:"macAddress,omitempty"`
}
