package shared

type DeviceReference struct {
	DeviceID         *string           `json:"deviceId,omitempty"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
}
