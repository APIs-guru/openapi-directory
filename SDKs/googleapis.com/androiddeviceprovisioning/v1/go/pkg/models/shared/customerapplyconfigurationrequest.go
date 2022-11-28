package shared

// CustomerApplyConfigurationRequest
// Request message for customer to assign a configuration to device.
type CustomerApplyConfigurationRequest struct {
	Configuration *string          `json:"configuration,omitempty"`
	Device        *DeviceReference `json:"device,omitempty"`
}
