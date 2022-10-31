package shared



type DeviceTierConfig struct {
    DeviceGroups []DeviceGroup `json:"deviceGroups,omitempty"`
    DeviceTierConfigID *string `json:"deviceTierConfigId,omitempty"`
    DeviceTierSet *DeviceTierSet `json:"deviceTierSet,omitempty"`
    
}

