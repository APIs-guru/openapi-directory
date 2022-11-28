package shared

// FindDevicesByOwnerResponse
// Response containing found devices.
type FindDevicesByOwnerResponse struct {
	Devices       []Device `json:"devices,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	TotalSize     *int32   `json:"totalSize,omitempty"`
}
