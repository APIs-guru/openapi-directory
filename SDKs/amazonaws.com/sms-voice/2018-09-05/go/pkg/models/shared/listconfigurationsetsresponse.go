package shared

type ListConfigurationSetsResponse struct {
	ConfigurationSets []string `json:"ConfigurationSets"`
	NextToken         *string  `json:"NextToken"`
}
