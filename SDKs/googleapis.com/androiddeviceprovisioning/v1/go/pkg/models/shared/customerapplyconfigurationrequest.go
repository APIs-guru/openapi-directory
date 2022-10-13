package shared

type CustomerApplyConfigurationRequest struct {
	Configuration *string          `json:"configuration"`
	Device        *DeviceReference `json:"device"`
}
