package shared

// AdTechnologyProviders
// Detected ad technology provider information.
type AdTechnologyProviders struct {
	DetectedProviderIds     []string `json:"detectedProviderIds,omitempty"`
	HasUnidentifiedProvider *bool    `json:"hasUnidentifiedProvider,omitempty"`
}
