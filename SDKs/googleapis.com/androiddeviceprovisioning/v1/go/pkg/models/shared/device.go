package shared

type Device struct {
	Claims           []DeviceClaim     `json:"claims"`
	Configuration    *string           `json:"configuration"`
	DeviceID         *string           `json:"deviceId"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier"`
	DeviceMetadata   *DeviceMetadata   `json:"deviceMetadata"`
	Name             *string           `json:"name"`
}
