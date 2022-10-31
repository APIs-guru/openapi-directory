package shared



type AdTechnologyProviders struct {
    DetectedProviderIds []string `json:"detectedProviderIds,omitempty"`
    HasUnidentifiedProvider *bool `json:"hasUnidentifiedProvider,omitempty"`
    
}

