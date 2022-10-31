package shared



type UpdateMetadataArguments struct {
    DeviceID *string `json:"deviceId,omitempty"`
    DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
    DeviceMetadata *DeviceMetadata `json:"deviceMetadata,omitempty"`
    
}

