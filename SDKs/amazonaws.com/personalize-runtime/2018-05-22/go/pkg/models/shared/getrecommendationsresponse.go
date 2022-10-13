package shared

type GetRecommendationsResponse struct {
	ItemList         []PredictedItem `json:"itemList"`
	RecommendationID *string         `json:"recommendationId"`
}
