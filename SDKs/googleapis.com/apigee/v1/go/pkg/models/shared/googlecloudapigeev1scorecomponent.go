package shared

type GoogleCloudApigeeV1ScoreComponent struct {
	CalculateTime   *string                                           `json:"calculateTime"`
	DataCaptureTime *string                                           `json:"dataCaptureTime"`
	DrilldownPaths  []string                                          `json:"drilldownPaths"`
	Recommendations []GoogleCloudApigeeV1ScoreComponentRecommendation `json:"recommendations"`
	Score           *int32                                            `json:"score"`
	ScorePath       *string                                           `json:"scorePath"`
}
