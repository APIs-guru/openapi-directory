package shared

type ListConfigurationSetsResponse struct {
	ConfigurationSets []string `json:"ConfigurationSets,omitempty"`
	NextToken         *string  `json:"NextToken,omitempty"`
}
