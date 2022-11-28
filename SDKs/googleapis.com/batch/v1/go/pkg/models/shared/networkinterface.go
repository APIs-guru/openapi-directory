package shared

// NetworkInterface
// A network interface.
type NetworkInterface struct {
	Network             *string `json:"network,omitempty"`
	NoExternalIPAddress *bool   `json:"noExternalIpAddress,omitempty"`
	Subnetwork          *string `json:"subnetwork,omitempty"`
}
