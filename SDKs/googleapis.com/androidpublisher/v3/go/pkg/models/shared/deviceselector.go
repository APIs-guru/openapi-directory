package shared

type DeviceSelector struct {
	DeviceRAM               *DeviceRAM      `json:"deviceRam"`
	ExcludedDeviceIds       []DeviceID      `json:"excludedDeviceIds"`
	ForbiddenSystemFeatures []SystemFeature `json:"forbiddenSystemFeatures"`
	IncludedDeviceIds       []DeviceID      `json:"includedDeviceIds"`
	RequiredSystemFeatures  []SystemFeature `json:"requiredSystemFeatures"`
}
