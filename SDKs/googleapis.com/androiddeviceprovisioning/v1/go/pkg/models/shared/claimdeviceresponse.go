package shared

type ClaimDeviceResponse struct {
	DeviceID   *string `json:"deviceId,omitempty"`
	DeviceName *string `json:"deviceName,omitempty"`
}
