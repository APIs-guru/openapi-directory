package shared

type GoogleCloudApigeeV1QueryTabularStatsRequest struct {
	Dimensions []string                               `json:"dimensions"`
	Filter     *string                                `json:"filter"`
	Metrics    []GoogleCloudApigeeV1MetricAggregation `json:"metrics"`
	PageSize   *int32                                 `json:"pageSize"`
	PageToken  *string                                `json:"pageToken"`
	TimeRange  *GoogleTypeInterval                    `json:"timeRange"`
}
