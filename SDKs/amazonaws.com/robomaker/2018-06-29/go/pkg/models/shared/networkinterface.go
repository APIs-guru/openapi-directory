package shared

// NetworkInterface
// Describes a network interface.
type NetworkInterface struct {
	NetworkInterfaceID *string `json:"networkInterfaceId,omitempty"`
	PrivateIPAddress   *string `json:"privateIpAddress,omitempty"`
	PublicIPAddress    *string `json:"publicIpAddress,omitempty"`
}
