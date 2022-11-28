package shared

// DeviceSummary
// The summary of devices.
type DeviceSummary struct {
	DeviceID     *string           `json:"DeviceId,omitempty"`
	DeviceStatus *DeviceStatusEnum `json:"DeviceStatus,omitempty"`
}
