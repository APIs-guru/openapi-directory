package shared

// DeviceTier
// A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
type DeviceTier struct {
	DeviceGroupNames []string `json:"deviceGroupNames,omitempty"`
	Level            *int32   `json:"level,omitempty"`
}
