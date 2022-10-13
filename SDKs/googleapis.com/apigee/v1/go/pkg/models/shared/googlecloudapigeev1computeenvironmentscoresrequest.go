package shared

type GoogleCloudApigeeV1ComputeEnvironmentScoresRequest struct {
	Filters   []GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter `json:"filters"`
	PageSize  *int32                                                     `json:"pageSize"`
	PageToken *string                                                    `json:"pageToken"`
	TimeRange *GoogleTypeInterval                                        `json:"timeRange"`
}
