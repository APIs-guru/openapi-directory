package shared

type DeviceTier struct {
	DeviceGroupNames []string `json:"deviceGroupNames,omitempty"`
	Level            *int32   `json:"level,omitempty"`
}
