package shared

// Device
// An Android or Chrome OS device registered for zero-touch enrollment.
type Device struct {
	Claims           []DeviceClaim     `json:"claims,omitempty"`
	Configuration    *string           `json:"configuration,omitempty"`
	DeviceID         *string           `json:"deviceId,omitempty"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
	DeviceMetadata   *DeviceMetadata   `json:"deviceMetadata,omitempty"`
	Name             *string           `json:"name,omitempty"`
}
