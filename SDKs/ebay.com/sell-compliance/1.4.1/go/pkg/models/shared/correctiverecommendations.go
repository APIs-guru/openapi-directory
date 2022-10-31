package shared



type CorrectiveRecommendations struct {
    AspectRecommendations []AspectRecommendations `json:"aspectRecommendations,omitempty"`
    ProductRecommendation *ProductRecommendation `json:"productRecommendation,omitempty"`
    
}

