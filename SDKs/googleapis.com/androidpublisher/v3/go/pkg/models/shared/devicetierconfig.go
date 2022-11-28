package shared

// DeviceTierConfig
// LINT.IfChange Configuration describing device targeting criteria for the content of an app.
type DeviceTierConfig struct {
	DeviceGroups       []DeviceGroup  `json:"deviceGroups,omitempty"`
	DeviceTierConfigID *string        `json:"deviceTierConfigId,omitempty"`
	DeviceTierSet      *DeviceTierSet `json:"deviceTierSet,omitempty"`
}

// DeviceTierConfigInput
// LINT.IfChange Configuration describing device targeting criteria for the content of an app.
type DeviceTierConfigInput struct {
	DeviceGroups  []DeviceGroup  `json:"deviceGroups,omitempty"`
	DeviceTierSet *DeviceTierSet `json:"deviceTierSet,omitempty"`
}
