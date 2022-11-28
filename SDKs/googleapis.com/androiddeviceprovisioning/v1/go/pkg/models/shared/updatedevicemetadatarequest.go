package shared

// UpdateDeviceMetadataRequest
// Request to set metadata for a device.
type UpdateDeviceMetadataRequest struct {
	DeviceMetadata *DeviceMetadata `json:"deviceMetadata,omitempty"`
}
