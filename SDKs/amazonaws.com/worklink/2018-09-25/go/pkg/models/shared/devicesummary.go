package shared

type DeviceSummary struct {
	DeviceID     *string           `json:"DeviceId,omitempty"`
	DeviceStatus *DeviceStatusEnum `json:"DeviceStatus,omitempty"`
}
