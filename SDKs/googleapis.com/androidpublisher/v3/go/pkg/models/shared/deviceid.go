package shared

// DeviceID
// Identifier of a device.
type DeviceID struct {
	BuildBrand  *string `json:"buildBrand,omitempty"`
	BuildDevice *string `json:"buildDevice,omitempty"`
}
