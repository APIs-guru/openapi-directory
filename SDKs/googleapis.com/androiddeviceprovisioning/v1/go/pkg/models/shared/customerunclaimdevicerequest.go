package shared

type CustomerUnclaimDeviceRequest struct {
	Device *DeviceReference `json:"device"`
}
