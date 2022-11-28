package shared

// ClaimDeviceResponse
// Response message containing device id of the claim.
type ClaimDeviceResponse struct {
	DeviceID   *string `json:"deviceId,omitempty"`
	DeviceName *string `json:"deviceName,omitempty"`
}
