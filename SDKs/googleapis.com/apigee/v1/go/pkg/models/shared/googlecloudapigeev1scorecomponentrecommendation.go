package shared

type GoogleCloudApigeeV1ScoreComponentRecommendation struct {
	Actions     []GoogleCloudApigeeV1ScoreComponentRecommendationAction `json:"actions"`
	Description *string                                                 `json:"description"`
	Impact      *int32                                                  `json:"impact"`
	Title       *string                                                 `json:"title"`
}
