package shared



type GetPersonalizedRankingResponse struct {
    PersonalizedRanking []PredictedItem `json:"personalizedRanking,omitempty"`
    RecommendationID *string `json:"recommendationId,omitempty"`
    
}

