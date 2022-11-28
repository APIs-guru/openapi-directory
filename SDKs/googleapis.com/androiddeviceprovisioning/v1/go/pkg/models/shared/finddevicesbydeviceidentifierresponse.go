package shared

// FindDevicesByDeviceIdentifierResponse
// Response containing found devices.
type FindDevicesByDeviceIdentifierResponse struct {
	Devices       []Device `json:"devices,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	TotalSize     *int32   `json:"totalSize,omitempty"`
}
