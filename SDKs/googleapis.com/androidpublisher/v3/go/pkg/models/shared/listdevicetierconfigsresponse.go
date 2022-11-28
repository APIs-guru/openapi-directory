package shared

// ListDeviceTierConfigsResponse
// Response listing existing device tier configs.
type ListDeviceTierConfigsResponse struct {
	DeviceTierConfigs []DeviceTierConfig `json:"deviceTierConfigs,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
}
