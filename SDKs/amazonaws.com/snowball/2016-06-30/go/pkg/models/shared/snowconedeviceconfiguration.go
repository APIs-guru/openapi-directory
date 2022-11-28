package shared

// SnowconeDeviceConfiguration
// Specifies the device configuration for an AWS Snowcone job.
type SnowconeDeviceConfiguration struct {
	WirelessConnection *WirelessConnection `json:"WirelessConnection,omitempty"`
}
