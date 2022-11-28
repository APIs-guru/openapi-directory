package shared

// CorrectiveRecommendations
// This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
type CorrectiveRecommendations struct {
	AspectRecommendations []AspectRecommendations `json:"aspectRecommendations,omitempty"`
	ProductRecommendation *ProductRecommendation  `json:"productRecommendation,omitempty"`
}
