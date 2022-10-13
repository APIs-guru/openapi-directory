package shared

type DeviceTierConfig struct {
	DeviceGroups       []DeviceGroup  `json:"deviceGroups"`
	DeviceTierConfigID *string        `json:"deviceTierConfigId"`
	DeviceTierSet      *DeviceTierSet `json:"deviceTierSet"`
}
