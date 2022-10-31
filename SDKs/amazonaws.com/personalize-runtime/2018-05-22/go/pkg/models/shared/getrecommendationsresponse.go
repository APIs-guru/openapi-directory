package shared



type GetRecommendationsResponse struct {
    ItemList []PredictedItem `json:"itemList,omitempty"`
    RecommendationID *string `json:"recommendationId,omitempty"`
    
}

