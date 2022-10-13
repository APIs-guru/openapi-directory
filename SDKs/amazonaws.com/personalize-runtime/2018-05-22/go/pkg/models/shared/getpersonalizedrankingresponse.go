package shared

type GetPersonalizedRankingResponse struct {
	PersonalizedRanking []PredictedItem `json:"personalizedRanking"`
	RecommendationID    *string         `json:"recommendationId"`
}
