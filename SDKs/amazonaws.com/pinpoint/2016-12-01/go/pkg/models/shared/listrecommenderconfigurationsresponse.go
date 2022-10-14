package shared

type ListRecommenderConfigurationsResponse struct {
	Item      []RecommenderConfigurationResponse `json:"Item"`
	NextToken *string                            `json:"NextToken,omitempty"`
}
