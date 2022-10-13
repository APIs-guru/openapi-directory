package shared

type GoogleCloudApigeeV1Score struct {
	Component     *GoogleCloudApigeeV1ScoreComponent  `json:"component"`
	Subcomponents []GoogleCloudApigeeV1ScoreComponent `json:"subcomponents"`
	TimeRange     *GoogleTypeInterval                 `json:"timeRange"`
}
