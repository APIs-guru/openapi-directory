package shared

// GoogleCloudApigeeV1ScoreComponentRecommendation
// Recommendation based on security concerns and score.
type GoogleCloudApigeeV1ScoreComponentRecommendation struct {
	Actions     []GoogleCloudApigeeV1ScoreComponentRecommendationAction `json:"actions,omitempty"`
	Description *string                                                 `json:"description,omitempty"`
	Impact      *int32                                                  `json:"impact,omitempty"`
	Title       *string                                                 `json:"title,omitempty"`
}
