package shared

type DeviceTier struct {
	DeviceGroupNames []string `json:"deviceGroupNames"`
	Level            *int32   `json:"level"`
}
