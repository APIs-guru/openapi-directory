package shared

type ListDeviceTierConfigsResponse struct {
	DeviceTierConfigs []DeviceTierConfig `json:"deviceTierConfigs"`
	NextPageToken     *string            `json:"nextPageToken"`
}
