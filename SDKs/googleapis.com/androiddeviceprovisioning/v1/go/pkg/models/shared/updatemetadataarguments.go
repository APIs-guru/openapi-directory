package shared

type UpdateMetadataArguments struct {
	DeviceID         *string           `json:"deviceId"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier"`
	DeviceMetadata   *DeviceMetadata   `json:"deviceMetadata"`
}
