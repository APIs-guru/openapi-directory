package shared

type DeviceSelector struct {
	DeviceRAM               *DeviceRAM      `json:"deviceRam,omitempty"`
	ExcludedDeviceIds       []DeviceID      `json:"excludedDeviceIds,omitempty"`
	ForbiddenSystemFeatures []SystemFeature `json:"forbiddenSystemFeatures,omitempty"`
	IncludedDeviceIds       []DeviceID      `json:"includedDeviceIds,omitempty"`
	RequiredSystemFeatures  []SystemFeature `json:"requiredSystemFeatures,omitempty"`
}
