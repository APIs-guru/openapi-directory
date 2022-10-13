package shared

type RecommenderConfigurationResponse struct {
	Attributes                    map[string]string `json:"Attributes"`
	CreationDate                  string            `json:"CreationDate"`
	Description                   *string           `json:"Description"`
	ID                            string            `json:"Id"`
	LastModifiedDate              string            `json:"LastModifiedDate"`
	Name                          *string           `json:"Name"`
	RecommendationProviderIDType  *string           `json:"RecommendationProviderIdType"`
	RecommendationProviderRoleArn string            `json:"RecommendationProviderRoleArn"`
	RecommendationProviderURI     string            `json:"RecommendationProviderUri"`
	RecommendationTransformerURI  *string           `json:"RecommendationTransformerUri"`
	RecommendationsDisplayName    *string           `json:"RecommendationsDisplayName"`
	RecommendationsPerMessage     *int64            `json:"RecommendationsPerMessage"`
}
