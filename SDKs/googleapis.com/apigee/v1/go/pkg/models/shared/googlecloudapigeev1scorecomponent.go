package shared

// GoogleCloudApigeeV1ScoreComponent
// Component is an individual security element that is scored.
type GoogleCloudApigeeV1ScoreComponent struct {
	CalculateTime   *string                                           `json:"calculateTime,omitempty"`
	DataCaptureTime *string                                           `json:"dataCaptureTime,omitempty"`
	DrilldownPaths  []string                                          `json:"drilldownPaths,omitempty"`
	Recommendations []GoogleCloudApigeeV1ScoreComponentRecommendation `json:"recommendations,omitempty"`
	Score           *int32                                            `json:"score,omitempty"`
	ScorePath       *string                                           `json:"scorePath,omitempty"`
}
