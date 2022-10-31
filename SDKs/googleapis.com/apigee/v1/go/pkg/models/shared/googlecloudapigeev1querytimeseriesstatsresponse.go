package shared



type GoogleCloudApigeeV1QueryTimeSeriesStatsResponse struct {
    Columns []string `json:"columns,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Values []GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence `json:"values,omitempty"`
    
}

