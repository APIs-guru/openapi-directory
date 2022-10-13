package shared

type AdTechnologyProviders struct {
	DetectedProviderIds     []string `json:"detectedProviderIds"`
	HasUnidentifiedProvider *bool    `json:"hasUnidentifiedProvider"`
}
