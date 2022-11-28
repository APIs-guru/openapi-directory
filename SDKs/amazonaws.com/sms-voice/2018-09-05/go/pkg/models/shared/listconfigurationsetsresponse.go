package shared

// ListConfigurationSetsResponse
// An object that contains information about the configuration sets for your account in the current region.
type ListConfigurationSetsResponse struct {
	ConfigurationSets []string `json:"ConfigurationSets,omitempty"`
	NextToken         *string  `json:"NextToken,omitempty"`
}
