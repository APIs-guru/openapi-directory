package shared

type GoogleCloudApigeeV1ComputeEnvironmentScoresResponse struct {
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
	Scores        []GoogleCloudApigeeV1Score `json:"scores,omitempty"`
}
