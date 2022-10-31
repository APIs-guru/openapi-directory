package shared

type RecommenderConfigurationResponse struct {
	Attributes                    map[string]string `json:"Attributes,omitempty"`
	CreationDate                  string            `json:"CreationDate"`
	Description                   *string           `json:"Description,omitempty"`
	ID                            string            `json:"Id"`
	LastModifiedDate              string            `json:"LastModifiedDate"`
	Name                          *string           `json:"Name,omitempty"`
	RecommendationProviderIDType  *string           `json:"RecommendationProviderIdType,omitempty"`
	RecommendationProviderRoleArn string            `json:"RecommendationProviderRoleArn"`
	RecommendationProviderURI     string            `json:"RecommendationProviderUri"`
	RecommendationTransformerURI  *string           `json:"RecommendationTransformerUri,omitempty"`
	RecommendationsDisplayName    *string           `json:"RecommendationsDisplayName,omitempty"`
	RecommendationsPerMessage     *int64            `json:"RecommendationsPerMessage,omitempty"`
}
