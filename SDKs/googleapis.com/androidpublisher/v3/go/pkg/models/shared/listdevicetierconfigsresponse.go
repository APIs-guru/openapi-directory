package shared



type ListDeviceTierConfigsResponse struct {
    DeviceTierConfigs []DeviceTierConfig `json:"deviceTierConfigs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

