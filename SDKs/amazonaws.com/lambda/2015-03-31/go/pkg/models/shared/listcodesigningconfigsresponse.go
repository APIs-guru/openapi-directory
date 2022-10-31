package shared



type ListCodeSigningConfigsResponse struct {
    CodeSigningConfigs []CodeSigningConfig `json:"CodeSigningConfigs,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

