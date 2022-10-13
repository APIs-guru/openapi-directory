package shared

type DeviceReference struct {
	DeviceID         *string           `json:"deviceId"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier"`
}
