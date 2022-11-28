package shared

// FindDevicesByDeviceIdentifierRequest
// Request to find devices.
type FindDevicesByDeviceIdentifierRequest struct {
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
	Limit            *string           `json:"limit,omitempty"`
	PageToken        *string           `json:"pageToken,omitempty"`
}
