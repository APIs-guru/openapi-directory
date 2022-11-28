package shared

// GoogleCloudApigeeV1ComputeEnvironmentScoresResponse
// Response for ComputeEnvironmentScores.
type GoogleCloudApigeeV1ComputeEnvironmentScoresResponse struct {
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
	Scores        []GoogleCloudApigeeV1Score `json:"scores,omitempty"`
}
