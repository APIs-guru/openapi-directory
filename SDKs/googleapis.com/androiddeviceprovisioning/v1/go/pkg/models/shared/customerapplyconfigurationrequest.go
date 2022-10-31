package shared

type CustomerApplyConfigurationRequest struct {
	Configuration *string          `json:"configuration,omitempty"`
	Device        *DeviceReference `json:"device,omitempty"`
}
