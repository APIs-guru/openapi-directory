package shared

type DeviceSummary struct {
	DeviceID     *string           `json:"DeviceId"`
	DeviceStatus *DeviceStatusEnum `json:"DeviceStatus"`
}
