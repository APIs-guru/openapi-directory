package shared

// GoogleCloudApigeeV1QueryTimeSeriesStatsResponse
// Represents security stats result as a collection of time series sequences.
type GoogleCloudApigeeV1QueryTimeSeriesStatsResponse struct {
	Columns       []string                                                  `json:"columns,omitempty"`
	NextPageToken *string                                                   `json:"nextPageToken,omitempty"`
	Values        []GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence `json:"values,omitempty"`
}
