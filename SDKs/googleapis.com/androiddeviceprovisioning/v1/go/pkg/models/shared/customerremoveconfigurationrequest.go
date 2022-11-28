package shared

// CustomerRemoveConfigurationRequest
// Request message for customer to remove the configuration from device.
type CustomerRemoveConfigurationRequest struct {
	Device *DeviceReference `json:"device,omitempty"`
}
