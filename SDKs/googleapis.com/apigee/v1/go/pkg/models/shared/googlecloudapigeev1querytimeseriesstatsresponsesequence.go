package shared

type GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence struct {
	Dimensions map[string]string `json:"dimensions"`
	Points     [][]interface{}   `json:"points"`
}
