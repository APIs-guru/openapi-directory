package shared

// CustomerUnclaimDeviceRequest
// Request message for customer to unclaim a device.
type CustomerUnclaimDeviceRequest struct {
	Device *DeviceReference `json:"device,omitempty"`
}
