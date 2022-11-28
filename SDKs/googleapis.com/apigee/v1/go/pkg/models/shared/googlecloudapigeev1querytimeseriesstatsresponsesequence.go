package shared

// GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence
// A sequence of time series.
type GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence struct {
	Dimensions map[string]string `json:"dimensions,omitempty"`
	Points     [][]interface{}   `json:"points,omitempty"`
}
