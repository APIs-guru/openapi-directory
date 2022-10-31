package shared



type AdUnit struct {
    AdFormat *string `json:"adFormat,omitempty"`
    AdTypes []string `json:"adTypes,omitempty"`
    AdUnitID *string `json:"adUnitId,omitempty"`
    AppID *string `json:"appId,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

