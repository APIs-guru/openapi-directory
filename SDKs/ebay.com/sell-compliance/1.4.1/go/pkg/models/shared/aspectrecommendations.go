package shared



type AspectRecommendations struct {
    LocalizedAspectName *string `json:"localizedAspectName,omitempty"`
    SuggestedValues []string `json:"suggestedValues,omitempty"`
    
}

