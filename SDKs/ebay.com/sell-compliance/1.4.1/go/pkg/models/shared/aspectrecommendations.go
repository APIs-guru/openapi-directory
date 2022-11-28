package shared

// AspectRecommendations
// This type is used by the aspectsRecommendation container, which is returned if eBay has found a listing with missing or invalid item aspects (ASPECTS_ADOPTION compliance type).
type AspectRecommendations struct {
	LocalizedAspectName *string  `json:"localizedAspectName,omitempty"`
	SuggestedValues     []string `json:"suggestedValues,omitempty"`
}
