package shared

type FindDevicesByDeviceIdentifierRequest struct {
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier"`
	Limit            *string           `json:"limit"`
	PageToken        *string           `json:"pageToken"`
}
