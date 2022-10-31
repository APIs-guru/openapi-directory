package shared

type GoogleCloudApigeeV1ComputeEnvironmentScoresRequest struct {
	Filters   []GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter `json:"filters,omitempty"`
	PageSize  *int32                                                     `json:"pageSize,omitempty"`
	PageToken *string                                                    `json:"pageToken,omitempty"`
	TimeRange *GoogleTypeInterval                                        `json:"timeRange,omitempty"`
}
