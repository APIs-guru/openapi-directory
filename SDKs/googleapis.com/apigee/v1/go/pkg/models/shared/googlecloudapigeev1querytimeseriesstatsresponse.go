package shared

type GoogleCloudApigeeV1QueryTimeSeriesStatsResponse struct {
	Columns       []string                                                  `json:"columns"`
	NextPageToken *string                                                   `json:"nextPageToken"`
	Values        []GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence `json:"values"`
}
