package shared

// UpdateMetadataArguments
// Identifies metadata updates to one device.
type UpdateMetadataArguments struct {
	DeviceID         *string           `json:"deviceId,omitempty"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
	DeviceMetadata   *DeviceMetadata   `json:"deviceMetadata,omitempty"`
}
