package shared

// DeviceSelector
// Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
type DeviceSelector struct {
	DeviceRAM               *DeviceRAM      `json:"deviceRam,omitempty"`
	ExcludedDeviceIds       []DeviceID      `json:"excludedDeviceIds,omitempty"`
	ForbiddenSystemFeatures []SystemFeature `json:"forbiddenSystemFeatures,omitempty"`
	IncludedDeviceIds       []DeviceID      `json:"includedDeviceIds,omitempty"`
	RequiredSystemFeatures  []SystemFeature `json:"requiredSystemFeatures,omitempty"`
}
