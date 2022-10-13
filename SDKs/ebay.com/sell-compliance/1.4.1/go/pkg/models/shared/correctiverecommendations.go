package shared

type CorrectiveRecommendations struct {
	AspectRecommendations []AspectRecommendations `json:"aspectRecommendations"`
	ProductRecommendation *ProductRecommendation  `json:"productRecommendation"`
}
