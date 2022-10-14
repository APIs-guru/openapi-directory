package shared

type Device struct {
	Claims           []DeviceClaim     `json:"claims,omitempty"`
	Configuration    *string           `json:"configuration,omitempty"`
	DeviceID         *string           `json:"deviceId,omitempty"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
	DeviceMetadata   *DeviceMetadata   `json:"deviceMetadata,omitempty"`
	Name             *string           `json:"name,omitempty"`
}
