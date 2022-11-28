package shared

// WirelessConnection
// Configures the wireless connection on an AWS Snowcone device.
type WirelessConnection struct {
	IsWifiEnabled *bool `json:"IsWifiEnabled,omitempty"`
}
