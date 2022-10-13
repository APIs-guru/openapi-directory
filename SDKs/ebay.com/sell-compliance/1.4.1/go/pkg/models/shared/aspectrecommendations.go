package shared

type AspectRecommendations struct {
	LocalizedAspectName *string  `json:"localizedAspectName"`
	SuggestedValues     []string `json:"suggestedValues"`
}
