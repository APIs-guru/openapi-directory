package shared

// ListRecommenderConfigurationsResponse
// Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
type ListRecommenderConfigurationsResponse struct {
	Item      []RecommenderConfigurationResponse `json:"Item"`
	NextToken *string                            `json:"NextToken,omitempty"`
}
