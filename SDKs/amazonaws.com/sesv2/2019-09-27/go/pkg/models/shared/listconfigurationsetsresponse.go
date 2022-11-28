package shared

// ListConfigurationSetsResponse
// A list of configuration sets in your Amazon SES account in the current AWS Region.
type ListConfigurationSetsResponse struct {
	ConfigurationSets []string `json:"ConfigurationSets,omitempty"`
	NextToken         *string  `json:"NextToken,omitempty"`
}
