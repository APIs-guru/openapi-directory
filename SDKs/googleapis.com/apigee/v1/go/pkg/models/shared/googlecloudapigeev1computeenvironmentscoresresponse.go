package shared

type GoogleCloudApigeeV1ComputeEnvironmentScoresResponse struct {
	NextPageToken *string                    `json:"nextPageToken"`
	Scores        []GoogleCloudApigeeV1Score `json:"scores"`
}
