package shared

type NetworkInterface struct {
	NetworkInterfaceID *string `json:"networkInterfaceId"`
	PrivateIPAddress   *string `json:"privateIpAddress"`
	PublicIPAddress    *string `json:"publicIpAddress"`
}
